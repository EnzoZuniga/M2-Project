import { Box, Button, ButtonGroup, Divider, Icon, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IMenu } from "../../../../../interface/IMenu";
import { IPlat } from "../../../../../interface/IPlat";
import { ICommande } from "../../../../../interface/ICommande";
import ModalMenuSelected from "./ModalMenuSelected";
import BillRow from "../../../../../components/BillRow";
import { Remove } from '@mui/icons-material';

interface IProps{
  idTable: number
}

const Order: React.FC<IProps> = ({idTable}) => {

  const [menuSelected, setMenuSelected] = useState<IMenu[]>([]);
  const [menu, setMenu] = useState<IMenu>();
  const [platSelected, setPlatSelected] = useState<IPlat[]>([]);
  const [openModalMenu, setOpenModalMenu] = useState<boolean>(false);
  const [commande, setCommande] = useState<Partial<ICommande>>()

  useEffect(() => {
    let newCommande: Partial<ICommande> = {};
    if(platSelected.length > 0 || menuSelected.length > 0) {
        const initialValue = 0;
        const sumMenu = menuSelected.map((menu) => menu.price)
                          ?.reduce((previous, next) => previous + next, initialValue) || 0;
        const sumPlat = platSelected.filter((plat) => !plat.selectedInMenu)
                          .map((plat) => plat.prixUnitaire)
                            ?.reduce((previous, next) => previous + next, initialValue) || 0;
        console.log(sumMenu, sumPlat)
        newCommande = {
          heurDepart: new Date(),
          heureArriver: new Date(),
          idMenus: menuSelected.map((menu) => menu.id) || [],
          idPlats: platSelected.filter((plat) => !plat.selectedInMenu).map((plat) => plat.idPlat) || [],
          idTable,
          noteTable: (sumPlat + sumMenu) || 0
        }
    }

    setCommande(newCommande)
    //TODO put/patch commande
  }, [idTable, menuSelected, platSelected])
  
  // TODO getMenus
  const mockedMenus: IMenu[] = [
    {
      id: 1,
      name: "Soir",
      plat: [4, 5],
      price: 35,
      dessert: [6]
    },
    {
      id: 2,
      name: "Soir WE",
      plat: [4, 5],
      price: 45,
      dessert: [6, 7],
      entree: [1, 2]
    },
    {
      id: 3,
      name: "Midi",
      plat: [4, 5],
      price: 24,
      dessert: [7]
    },
    {
      id: 4,
      name: "Midi WE",
      plat: [3, 4, 5],
      price: 30,
      dessert: [6, 7]
    },
  ]

  //TODO getPlats
  const mockedPlats: IPlat[] = [
    {
      idPlat: 1,
      nom: "Plat 1",
      prixUnitaire: 10,
      type: "entree",
      usedProductIds: [1, 2, 3]
    },
    {
      idPlat: 2,
      nom: "Plat 2",
      prixUnitaire: 10,
      type: "entree",
      usedProductIds: [1, 2, 3]
    },
    {
      idPlat: 3,
      nom: "Plat 3",
      prixUnitaire: 30,
      type: "plat",
      usedProductIds: [1, 2, 3]
    },
    {
      idPlat: 4,
      nom: "Plat 4",
      prixUnitaire: 10,
      type: "plat",
      usedProductIds: [1, 2, 3]
    },
    {
      idPlat: 5,
      nom: "Plat 5",
      prixUnitaire: 10,
      type: "plat",
      usedProductIds: [1, 2, 3]
    },
    {
      idPlat: 6,
      nom: "Plat 6",
      prixUnitaire: 10,
      type: "dessert",
      usedProductIds: [1, 2, 3]
    },
    {
      idPlat: 7,
      nom: "Plat 7",
      prixUnitaire: 10,
      type: "dessert",
      usedProductIds: [1, 2, 3]
    }
  ]

  const addMenu = (menu: IMenu) => {
    const newMenuSelected = [...menuSelected, menu];

    setMenuSelected(newMenuSelected)
  }

  const addPlat = (plat: IPlat, inMenu?: boolean) => {
    const newArrayPlat: IPlat[] = [...platSelected, {...plat, selectedInMenu: inMenu || false}];

    setPlatSelected(newArrayPlat)
  }

  const handleCloseModalMenu = () => {
    setOpenModalMenu(false)
  }

  const handleOpenModalMenu = (menu: IMenu) => {
    setMenu(menu)
    setOpenModalMenu(true)
  }

  const handleRemove = (idMenu?: number, idPlat?: number) => {
    if(idMenu){

    }
  }

  return(
    <Box className="order">
      <Box>
        <Box>
          <Typography variant="h6">MENUS</Typography>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            {
              mockedMenus.map((menu) => {
                return(
                  <Button key={menu.id} onClick={() => handleOpenModalMenu(menu)} >{menu.name}</Button>
                )
              })
            }
          </ButtonGroup>
        </Box>
        <Box>
          <Typography variant="h6" >ENTREES</Typography>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            {
              mockedPlats.filter((plat) => plat.type === "entree").map((plat) => {
                return(
                  <Button key={plat.idPlat} onClick={() => addPlat(plat)}>{plat.nom}</Button>
                )
              })
            }
          </ButtonGroup>
        </Box>
        <Box>
          <Typography variant="h6" >PLATS</Typography>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            {
              mockedPlats.filter((plat) => plat.type === "plat").map((plat) => {
                return(
                  <Button key={plat.idPlat} onClick={() => addPlat(plat)}>{plat.nom}</Button>
                )
              })
            }
          </ButtonGroup>
        </Box>
        <Box>
          <Typography variant="h6" >DESSERT</Typography>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            {
              mockedPlats.filter((plat) => plat.type === "dessert").map((plat) => {
                return(
                  <Button key={plat.idPlat} onClick={() => addPlat(plat)}>{plat.nom}</Button>
                )
              })
            }
          </ButtonGroup>
        </Box>
      </Box>
      <Divider orientation="vertical"/>
      <Box sx={{marginLeft: "2em", marginBottom: "3em"}}>
        <Typography variant="h5">
          COMMANDE
        </Typography>
        <br/>
        <Box className="bill">
          <Typography variant="subtitle1">Menu</Typography>
          <Divider orientation="horizontal" sx={{marginBottom: "1em"}}/>
          {
            commande?.idMenus?.map((id: number) => {
              return(
                <Box className="remove">
                  <BillRow key={id} idMenu={id}/>
                  <Remove onClick={() => handleRemove(id)} />
                </Box>
              )
            })
          }
          <Typography variant="subtitle1">Plats à la carte</Typography>
          <Divider orientation="horizontal" sx={{marginBottom: "1em"}}/>
          {
            commande?.idPlats?.map((id: number) => {
              return(
                <Box className="remove">
                  <BillRow key={id} idPlat={id}/>
                  <Remove onClick={() => handleRemove(undefined, id)} />
                </Box>
              )
            })
          }
          <Box className="bill-row total">
            <Typography variant="subtitle1">Total</Typography>
            <Typography variant="subtitle1">{commande?.noteTable || 0}</Typography>
          </Box>
        </Box>
      </Box>
      <ModalMenuSelected addPlat={addPlat} plats={mockedPlats} addMenu={addMenu} menu={menu} open={openModalMenu} onClose={handleCloseModalMenu}/>
    </Box>
  )
}

export default Order;