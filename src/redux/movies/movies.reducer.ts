import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMovieDetails,
  fetchMovies,
  searchMoviesByName,
} from "./movies.action";
import { IMoviesState } from "../../typedef/movies.typedef";

const initialState: IMoviesState = {
  moviesList: {
    movies: [],
    page: 1,
    searchedMovies: false,
    loading: false,
    error: null,
  },
  movieDetails: {
    details: null,
    loading: false,
    error: null,
  },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetMoviesList: (state, action) => {
      state.moviesList.movies = [];
      state.moviesList.page = 1;
      state.moviesList.searchedMovies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.moviesList.loading = true;
        state.moviesList.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.moviesList.loading = false;
        state.moviesList.page = action.payload.page;
        state.moviesList.movies = [
          ...state.moviesList.movies,
          ...action.payload.results,
        ];
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.moviesList.loading = false;
        state.moviesList.error = action.error.message;
      });

    builder
      .addCase(searchMoviesByName.pending, (state) => {
        state.moviesList.loading = true;
        state.moviesList.error = null;
      })
      .addCase(searchMoviesByName.fulfilled, (state, action) => {
        state.moviesList.loading = false;
        state.moviesList.page = action.payload.page;
        state.moviesList.movies = [
          ...state.moviesList.movies,
          ...action.payload.results,
        ];
      })
      .addCase(searchMoviesByName.rejected, (state, action) => {
        state.moviesList.loading = false;
        state.moviesList.error = action.error.message;
      });

    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.movieDetails.loading = true;
        state.movieDetails.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.movieDetails.loading = false;
        state.movieDetails.details = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.movieDetails.loading = false;
        state.movieDetails.error = action.error.message;
      });
  },
});

export const { resetMoviesList } = moviesSlice.actions;

export default moviesSlice.reducer;
