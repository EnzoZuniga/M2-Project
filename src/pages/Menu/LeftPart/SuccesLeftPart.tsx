import { Paper, Typography } from "@mui/material";
import React from "react";

const SuccesLeftPart: React.FC = () => {
  return(
    <Paper className="selectAction green">
      <Typography fontSize="large" variant="caption">
        Votre menu à bien été créé
        <br/>
        et est disponible dans la liste de gauche
      </Typography>
    </Paper>
  )
}

export default SuccesLeftPart;
