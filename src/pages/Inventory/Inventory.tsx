import React from "react";
import DataGridWrapper from "../../components/DataGridWrapper";
import { Box, Typography } from "@mui/material";

const Inventory: React.FC = () => {
  return(
    <Box>
      <Typography variant="h3">Inventaire</Typography>
      <DataGridWrapper/>
    </Box>
  )
}

export default Inventory;