import { Theme } from "@mui/material";

export const appStyles = (theme: Theme) => {
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
    container: {
      padding: "1rem",
    },
    movieContainer: {
      display: "flex",
      justifyContent: "center",
    },
  };
};
