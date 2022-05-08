import { Box } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">Right</Box>
    </Box>
  );
};

export default RightBar;
