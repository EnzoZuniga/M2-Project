import { Paper, Typography } from "@mui/material";
import React from "react";

const DeleteLeftPart: React.FC = () => {
  return(
    <Paper className="selectAction red">
      <Typography fontSize="large" variant="caption">
        Votre menu à bien été supprimé
      </Typography>
    </Paper>
  )
}

export default DeleteLeftPart;
