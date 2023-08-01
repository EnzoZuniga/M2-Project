import { Paper, Typography } from "@mui/material";
import React from "react";
import "./LeftPart.css"

const Default: React.FC = () => {
  return(
    <Paper className="selectAction">
      <Typography fontSize="large" variant="caption">
        Sélectionner une table pour passer commande,
        ou ajouter une nouvelle table
      </Typography>
    </Paper>
  )
}

export default Default;