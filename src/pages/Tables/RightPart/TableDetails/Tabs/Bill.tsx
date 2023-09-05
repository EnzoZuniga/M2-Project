import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { ICommande } from "../../../../../interface/ICommande";
import BillRow from "../../../../../components/BillRow";

interface IProps {
  commande: ICommande
}

const Bill: React.FC<IProps> = ({commande}) => {

  commande && <CircularProgress/>

  return(
    <Box className="billWrapper">
      <Box className="bill">
        {
          commande.idMenus?.map((id: number) => {
            return(
              <BillRow key={id} idMenu={id}/>
            )
          })
        }
        {
          commande.idPlats?.map((id: number) => {
            return(
              <BillRow key={id} idPlat={id}/>
            )
          })
        }
        <Box className="bill-row total">
          <Typography variant="subtitle1">Total</Typography>
          <Typography variant="subtitle1">{commande.noteTable}</Typography>
        </Box>
      </Box>
      <Box className="paymentMethode">
        <Button variant="contained" className="methode">
          CB
        </Button>
        <Button variant="contained" className="methode">
          Espèces
        </Button>
      </Box>
    </Box>
  )
}

export default Bill;