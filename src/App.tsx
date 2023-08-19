import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, searchMoviesByName } from "./redux/movies/movies.action";
import { AppDispatch, RootState } from "./redux/store";
import MovieCard from "./components/movie-card/movie-card.component";
import {
  Box,
  Grid,
  AppBar,
  Toolbar,
  useTheme,
  Typography,
} from "@mui/material";
import { appStyles } from "./App.styles";
import CustomProgress from "./components/custom-progress/custom-progress.component";
import InfiniteScroll from "react-infinite-scroll-component";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import SearchBar from "./components/search-bar/search-bar.component";
import { resetMoviesList } from "./redux/movies/movies.reducer";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const styles = appStyles(useTheme());
  const navigate = useNavigate();
  const { loading, movies, page, searchedMovies } = useSelector(
    (state: RootState) => state.movies.moviesList
  );
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(fetchMovies(1));
  }, []);

  useEffect(() => {
    if (searchedMovies && searchValue.length === 0) {
      dispatch(resetMoviesList(false));
      dispatch(fetchMovies(1));
    }
  }, [searchValue]);

  const fetchMoviesData = () => {
    if (searchedMovies) {
      dispatch(searchMoviesByName({ page: page + 1, value: searchValue }));
    } else {
      dispatch(fetchMovies(page + 1));
    }
  };

  return (
    <Box>
      <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <SearchBar
            searchValue={searchValue}
            updateSearchValue={(val) => setSearchValue(val)}
          />
          <HomeIcon sx={styles.homeIcon} onClick={() => navigate("/")} />
        </Toolbar>
      </AppBar>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoviesData}
        hasMore={true}
        loader={loading && <CustomProgress />}
      >
        <Grid container spacing={2} sx={styles.container}>
          {movies.map((movie, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              lg={3}
              xl={2}
              sx={styles.movieContainer}
            >
              <MovieCard movieDetails={movie} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
      {movies.length === 0 && !loading && (
        <Typography variant="h5" textAlign="center">
          No Movie Found
        </Typography>
      )}
    </Box>
  );
}

export default App;
