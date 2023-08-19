import { Theme } from "@mui/material";

export const movieDetailsPageStyles = (theme: Theme) => {
  return {
    appBar: {},
    toolbar: {
      padding: "0.5rem 3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: theme.palette.secondary.light,
      backgroundColor: theme.palette.background.default,
    },
    homeIcon: {
      cursor: "pointer",
    },
  };
};
