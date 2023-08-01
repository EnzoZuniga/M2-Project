import { Paper } from "@mui/material";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';


export const HomeIconButton = () => {

  const handleHome = () => {
    //faire un dispatch quand j'aurais mis en place le store
  }

  return(
    <Paper sx={{
              position: "fixed",
              bottom: 10,
              right: 10,
              padding: "2em",
              borderRadius: "50px",
              cursor: "pointer"
            }}
            onClick={() => handleHome()}
    >
      <HomeIcon sx={{color: "black"}} fontSize="large"/>
    </Paper>
  )
}