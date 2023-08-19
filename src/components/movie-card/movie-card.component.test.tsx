import { render, screen } from "@testing-library/react";
import MovieCard from "./movie-card.component";
import { BrowserRouter } from "react-router-dom";

describe("Test Movie Card Component", () => {
  const movieDetails = {
    id: 1,
    title: "Movie Title",
    poster_path: "/poster.jpg",
    vote_average: 7.5,
    overview: "Movie overview",
  };

  test("renders movie card with correct content", () => {
    render(<MovieCard movieDetails={movieDetails} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText("Movie Title")).toBeInTheDocument();
    expect(screen.getByText("Movie overview")).toBeInTheDocument();
  });

  test("route to movie details on movie card click", () => {
    render(<MovieCard movieDetails={movieDetails} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByText("Movie Title")).toBeInTheDocument();
    expect(screen.getByText("Movie overview")).toBeInTheDocument();
  });
});
