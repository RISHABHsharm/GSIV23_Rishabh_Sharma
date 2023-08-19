import { useEffect } from "react";
import { Box, Typography, AppBar, Toolbar, useTheme } from "@mui/material";
import { movieDetailsPageStyles } from "./movie-details.page.styles";
import HomeIcon from "@mui/icons-material/Home";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../redux/movies/movies.action";
import { AppDispatch, RootState } from "../../redux/store";
import CustomProgress from "../../components/custom-progress/custom-progress.component";
import MovieDetail from "../../components/movie-details/movie-details.component";

const MovieDetailsPage = () => {
  const styles = movieDetailsPageStyles(useTheme());
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, details } = useSelector(
    (state: RootState) => state.movies.movieDetails
  );

  useEffect(() => {
    if (params.movieId) {
      dispatch(fetchMovieDetails(params.movieId));
    }
  }, []);

  return (
    <Box>
      <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Typography variant="h5">Movie Details</Typography>
          <HomeIcon sx={styles.homeIcon} onClick={() => navigate("/")} />
        </Toolbar>
      </AppBar>
      {loading ? (
        <CustomProgress />
      ) : details ? (
        <MovieDetail movieDetail={details} />
      ) : (
        <Typography variant="h5" textAlign="center">
          No Movie Found
        </Typography>
      )}
    </Box>
  );
};
export default MovieDetailsPage;
