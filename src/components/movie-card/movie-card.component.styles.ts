export const movieCardStyles = () => {
  return {
    card: {
      width: 300,
      padding: "0.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      "& .image": {
        borderRadius: "0.25rem",
        height: 300,
      },
    },
    titleContainer: {
      width: "100%",
      padding: "0.5rem 0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      fontWeight: 600,
      fontSize: "1.2rem",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      lineClamp: "1",
      WebkitLineClamp: "1",
      WebkitBoxOrient: "vertical",
    },
    description: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      lineClamp: "2",
      WebkitLineClamp: "2",
      WebkitBoxOrient: "vertical",
    },
  };
};
