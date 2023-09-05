import { Dialog, DialogTitle, DialogContent, DialogActions, Button, CircularProgress, Box, ButtonGroup, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material"
import React, { useState } from "react"
import { IMenu } from "../../../../../interface/IMenu"
import { IPlat } from "../../../../../interface/IPlat"
import ToogleGroupWrapper from "../../../../../components/ToogleGroupWrapper"

interface IProps {
  open: boolean,
  onClose: () => void,
  menu?: IMenu,
  addMenu: any,
  addPlat: any,
  plats: IPlat[]
}

const ModalMenuSelected: React.FC<IProps> = ({open, onClose, menu, addMenu, addPlat, plats}) => {

  const [entreeSelected, setEntreeSelected] = useState<IPlat | null>();
  const [platSelected, setPlatSelected] = useState<IPlat | null>();
  const [dessertSelected, setDessertSelected] = useState<IPlat | null>();

  const handleValidate = () => {
    addPlat(entreeSelected, true)
    addPlat(platSelected, true)
    addPlat(dessertSelected, true)
    addMenu(menu);
    onClose();
  }

  !menu && <CircularProgress/>

  return(
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{menu?.name}</DialogTitle>
      <DialogContent>
        <Box>
          <Typography variant="h6" >ENTREES</Typography>
          <ToogleGroupWrapper menu={menu!} setValue={setEntreeSelected} type="entree" value={entreeSelected!} values={plats}/>
        </Box>
        <Box>
          <Typography variant="h6" >PLATS</Typography>
            <ToogleGroupWrapper menu={menu!} setValue={setPlatSelected} type="plat" value={platSelected!} values={plats}/>
        </Box>
        <Box>
          <Typography variant="h6" >DESSERT</Typography>
            <ToogleGroupWrapper menu={menu!} setValue={setDessertSelected} type="dessert" value={dessertSelected!} values={plats}/>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Annuler</Button>
        <Button onClick={handleValidate}>Valider</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalMenuSelected;
