import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  movieDetailsUrl,
  movieListUrl,
  searchMovieUrl,
} from "../api-helpers/api-constants";
import axiosInstance from "../api-helpers/http-intercepter";
import { ISearchMovieActionProps } from "../../typedef/movies.typedef";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page: number) => {
    const response = await axiosInstance.get(`${movieListUrl}?page=${page}`);
    return response.data;
  }
);

export const searchMoviesByName = createAsyncThunk(
  "movies/searchMoviesByName",
  async ({ page, value }: ISearchMovieActionProps) => {
    const response = await axiosInstance.get(
      `${searchMovieUrl}?query=${value}&page=${page}`
    );
    return response.data;
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (movieId: string) => {
    const response = await axiosInstance.get(
      `${movieDetailsUrl}/${movieId}?append_to_response=casts`
    );
    return response.data;
  }
);
