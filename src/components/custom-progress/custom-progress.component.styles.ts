import { Theme } from "@mui/material";

export const customProgressStyles = (theme: Theme) => {
  return {
    container: {
      margin: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: theme.palette.secondary.main,
    },
  };
};
