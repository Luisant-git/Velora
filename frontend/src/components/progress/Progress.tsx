import { Box, CircularProgress } from "@mui/material";

const CenteredLoader = () => (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh" // Full viewport height
    >
      <CircularProgress />
    </Box>
  );

  export default CenteredLoader;