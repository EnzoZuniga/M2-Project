import { Paper, Typography } from "@mui/material";
import React from "react";

const DefaultLeftPart: React.FC = () => {
  return(
    <Paper className="selectAction">
      <Typography fontSize="large" variant="caption">
        Sélectionner ou creer un menu
      </Typography>
    </Paper>
  )
}

export default DefaultLeftPart;
