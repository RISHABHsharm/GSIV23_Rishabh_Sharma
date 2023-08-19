import { Theme } from "@mui/material";

export const searchBarStyles = (theme: Theme) => {
  return {
    container: { width: 500 },
    search: {},
    searchIcon: {
      marginRight: "0.5rem",
      color: theme.palette.secondary.light,
    },
    closeIcon: {
      cursor: "pointer",
      color: theme.palette.secondary.light,
    },
  };
};
