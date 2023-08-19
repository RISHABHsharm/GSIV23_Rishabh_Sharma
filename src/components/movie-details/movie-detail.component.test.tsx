import MovieDetail from "./movie-details.component";
import { screen, render } from "@testing-library/react";
import { movieImageUrl } from "../../redux/api-helpers/api-constants";

describe("Test MovieDetail Component", () => {
  const movieDetail = {
    id: 1,
    title: "Movie Title",
    poster_path: "/poster.jpg",
    vote_average: 7.5,
    overview: "Movie overview",
    release_date: "2023-08-19",
    runtime: 120,
    casts: {
      crew: [{ id: 2, name: "Director 1", job: "Director" }],
      cast: [
        { id: 3, name: "Actor 1" },
        { id: 4, name: "Actor 2" },
      ],
    },
  };

  test("renders movie details correctly", () => {
    render(<MovieDetail movieDetail={movieDetail} />);
    const movieTitle = screen.getByText("Movie Title");
    const movieImg = screen.getByAltText("Movie Title");
    expect(movieTitle).toBeInTheDocument();
    expect(movieImg).toHaveAttribute(
      "src",
      `${movieImageUrl}${movieDetail.poster_path}`
    );
  });
});
