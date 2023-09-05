import React from "react";
import { IPlat } from "../interface/IPlat";
import { Box } from "@mui/material";

interface IProps {
  idPlat?: number,
  idMenu?: number
}

const BillRow : React.FC<IProps> = ({idPlat, idMenu}) => {

  //TODO getPlat
  const platMocked : IPlat = {
    idPlat: 1,
    nom: "Salade",
    prixUnitaire: 20,
    type: "dessert",
    usedProductIds: [1, 2, 4]
  }

  //TODO getMenu
  


  return(
    <Box className="bill-row">
      <Box>
        {platMocked.nom}
      </Box>
      <Box>
        {platMocked.prixUnitaire}
      </Box>
    </Box>
  )
}

export default BillRow;