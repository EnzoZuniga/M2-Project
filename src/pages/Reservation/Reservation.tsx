import React from "react";
import DataGridWrapper from "../../components/DataGridWrapper";
import { Box, Typography } from "@mui/material";

const Reservation: React.FC = () => {
  return(
    <Box>
      <Typography variant="h3">Reservations</Typography>
      <DataGridWrapper/>
    </Box>
  )
}

export default Reservation;