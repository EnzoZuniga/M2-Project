import { Paper, Typography } from "@mui/material";
import React from "react";

const UpdateLeftPart: React.FC = () => {
  return(
    <Paper className="selectAction green">
      <Typography fontSize="large" variant="caption">
        Votre menu à bien été mis à jour
      </Typography>
    </Paper>
  )
}

export default UpdateLeftPart;
