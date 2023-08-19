import { Theme } from "@mui/material";

export const movieDetailStyles = (theme: Theme) => {
  return {
    container: {
      padding: "1rem",
      "& .image": {
        borderRadius: "0.5rem",
      },
    },
    title: {
      display: "flex",
      gap: 6,
      alignItems: "baseline",
      marginBottom: "0.75rem",
      color: theme.palette.secondary.light,
    },
    description: {
      margin: "0.5rem 0",
      display: "grid",
      gap: 2,
      gridTemplateColumns: "8rem 1fr",
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
      },
    },
    descriptionTitle: {
      fontSize: "1.2rem",
      textAlign: "center",
    },
  };
};
