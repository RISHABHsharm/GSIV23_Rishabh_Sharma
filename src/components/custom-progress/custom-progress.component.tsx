import { Box, CircularProgress, Typography, useTheme } from "@mui/material";
import { customProgressStyles } from "./custom-progress.component.styles";

const CustomProgress = () => {
  const styles = customProgressStyles(useTheme());

  return (
    <Box sx={styles.container}>
      <CircularProgress color="inherit" size={32} />
      <Typography color="inherit">Loading</Typography>
    </Box>
  );
};
export default CustomProgress;
