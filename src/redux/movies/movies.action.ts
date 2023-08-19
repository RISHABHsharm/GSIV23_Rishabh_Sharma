import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieListUrl, searchMovieUrl } from "../api-helpers/api-constants";
import axiosInstance from "../api-helpers/http-intercepter";
import { SearchMovieActionProps } from "../../typedef/movies.typedef";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page: number) => {
    const response = await axiosInstance.get(`${movieListUrl}?page=${page}`);
    return response.data;
  }
);

export const searchMoviesByName = createAsyncThunk(
  "movies/searchMoviesByName",
  async ({ page, value }: SearchMovieActionProps) => {
    const response = await axiosInstance.get(
      `${searchMovieUrl}?query=${value}&page=${page}`
    );
    return response.data;
  }
);
