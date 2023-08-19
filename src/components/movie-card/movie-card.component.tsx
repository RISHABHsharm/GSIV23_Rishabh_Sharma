import { useNavigate } from "react-router-dom";
import { movieCardStyles } from "./movie-card.component.styles";
import { Box, Card } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { movieImageUrl } from "../../redux/api-helpers/api-constants";
import { IMovie } from "../../typedef/movies.typedef";

type MovieCardProps = {
  movieDetails: IMovie,
};

const MovieCard = ({ movieDetails }: MovieCardProps) => {
  const navigate = useNavigate();
  const styles = movieCardStyles();

  return (
    <Card
      sx={styles.card}
      onClick={() => navigate(`/details/${movieDetails.id}`)}
    >
      <LazyLoadImage
        height="300"
        width="290"
        className="image"
        src={`${movieImageUrl}${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <Box sx={styles.titleContainer}>
        <Box sx={styles.title}>{movieDetails.title}</Box>
        <Box>({movieDetails.vote_average})</Box>
      </Box>
      <Box sx={styles.description}>{movieDetails.overview}</Box>
    </Card>
  );
};
export default MovieCard;
