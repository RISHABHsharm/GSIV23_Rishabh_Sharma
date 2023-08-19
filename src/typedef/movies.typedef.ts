export interface Movie {
  id: number;
  image: string;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

export interface SearchMovieActionProps {
  page: number;
  value: string;
}

export interface MoviesState {
  movies: Movie[];
  page: number;
  searchedMovies: boolean;
  loading: boolean;
  error: string | null | undefined;
}
