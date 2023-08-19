import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, searchMoviesByName } from "./movies.action";
import { MoviesState } from "../../typedef/movies.typedef";

const initialState: MoviesState = {
  movies: [],
  page: 1,
  searchedMovies: false,
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetMoviesList: (state, action) => {
      state.movies = [];
      state.page = 1;
      state.searchedMovies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.page = action.payload.page;
        state.movies = [...state.movies, ...action.payload.results];
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(searchMoviesByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMoviesByName.fulfilled, (state, action) => {
        state.loading = false;
        state.page = action.payload.page;
        state.movies = [...state.movies, ...action.payload.results];
      })
      .addCase(searchMoviesByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetMoviesList } = moviesSlice.actions;

export default moviesSlice.reducer;
