import { Box, Grid, useTheme, Typography } from "@mui/material";
import { movieDetailStyles } from "./movie-details.component.styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { movieImageUrl } from "../../redux/api-helpers/api-constants";
import { IMovieDetail } from "../../typedef/movies.typedef";

type MovieDetailProps = {
  movieDetail: IMovieDetail,
};

const MovieDetail = ({ movieDetail }: MovieDetailProps) => {
  const styles = movieDetailStyles(useTheme());

  const convertTime = (time: number) => {
    const hrs = `${Math.floor(time / 60)}`;
    const mins = `${Math.floor(time % 60)}`;
    return `${hrs.padStart(2, "0")} : ${mins.padStart(2, "0")}`;
  };

  const getDirector = () => {
    return (
      movieDetail.casts.crew.filter((member) => member.job === "Director")?.[0]
        .name ?? ""
    );
  };

  return (
    <Grid container spacing={2} sx={styles.container}>
      <Grid item sm={12} md={5} lg={4}>
        <LazyLoadImage
          height="450"
          width="350"
          className="image"
          src={`${movieImageUrl}${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />
      </Grid>
      <Grid item sm={12} md={7} lg={8}>
        <Box sx={styles.title}>
          <Typography variant="h3" component="span">
            {movieDetail.title}
          </Typography>
          <Typography variant="h5" component="span">
            ({movieDetail.vote_average.toFixed(2)})
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="span">
            {new Date(movieDetail.release_date).getFullYear()}
            {" | "}
          </Typography>
          <Typography variant="h6" component="span">
            {convertTime(movieDetail.runtime)}
            {" | "}
          </Typography>
          <Typography variant="h6" component="span">
            {getDirector()}
          </Typography>
        </Box>
        <Box sx={styles.description}>
          <Typography sx={styles.descriptionTitle}>Cast:</Typography>
          <Box>
            {movieDetail.casts.cast.slice(0, 10).map((cast, index) => (
              <Typography key={cast.id} component="span">
                {cast.name}
                {index < 9 ? ", " : ", ...others"}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box sx={styles.description}>
          <Typography sx={styles.descriptionTitle}>Description:</Typography>
          <Typography>{movieDetail.overview}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default MovieDetail;
