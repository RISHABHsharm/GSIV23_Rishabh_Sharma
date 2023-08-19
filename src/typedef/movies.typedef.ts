export interface IMovie {
  id: number;
  image: string;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

export interface IMember {
  id: string;
  name: string;
  known_for_department: string;
  job?: string;
}

export interface IMovieDetail extends IMovie {
  runtime: number;
  release_date: string;
  casts: { cast: IMember[], crew: IMember[] };
}

export interface ISearchMovieActionProps {
  page: number;
  value: string;
}

export interface IMoviesListState {
  movies: IMovie[];
  page: number;
  searchedMovies: boolean;
  loading: boolean;
  error: string | null | undefined;
}
export interface IMovieDetailsState {
  details: null | IMovieDetail;
  loading: boolean;
  error: string | null | undefined;
}
export interface IMoviesState {
  moviesList: IMoviesListState;
  movieDetails: IMovieDetailsState;
}
