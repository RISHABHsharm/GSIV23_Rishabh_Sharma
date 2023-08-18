export interface Movie {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface MoviesState {
  movies: Movie[];
  loading: boolean;
  error: string | null | undefined;
}
