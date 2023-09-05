import { Box, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect } from "react";
import "./Menu.css"
import DeleteLeftPart from "./RightPart/DeleteLeftPart";
import DefaultLeftPart from "./RightPart/DefaultLeftPart";
import SuccesLeftPart from "./RightPart/SuccesLeftPart";
import UpdateLeftPart from "./RightPart/UpdateLeftPart";
import EditLeftPart from "./RightPart/EditMenu/EditLeftPart";
import { PartEnumType } from "../../constant/PartEnum";
import { IMenu } from "../../interface/IMenu";
import { useEditQuery } from "../../hook/useEditQuery";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../interface/IRootState";
import { setMenu, setDisplayPart, resetStore } from "../../store/store";

const menuMocked: IMenu[] = [
  {
    id: 1,
    name: "Menu Midi",
    price: 24,
    entree: [1, 2, 3],
    plat: [6, 7, 8],
    dessert: [11, 12, 13],
  },
  {
    id: 2,
    name: "Menu Soir",
    price: 20,
    entree: [4, 5],
    plat: [9, 10], 
  }
];

const Menu: React.FC = () => {
  
  const displayPart = useSelector((state: RootState) => state.displayPart);
  const menu = useSelector((state: RootState) => state.menu);

  const {getMenus} = useEditQuery();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchMenus = async () => {
  //     try {
  //       const fetchedMenus = await getMenus();
  //       setMenus(fetchedMenus);
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération des menus :", error);
  //     }
  //   };
  //   fetchMenus();
  // }, [getMenus])

  let Component;

  switch (displayPart) {
    case "succes":
      Component = SuccesLeftPart;
      break;
    case "create":
    case "edit":
      Component = EditLeftPart;
      break;
    case "delete":
      Component = DeleteLeftPart;
      break;
    case "update":
      Component = UpdateLeftPart;
      break;
    default:
      Component = DefaultLeftPart;
      break;
  }

  const handleEditMenu = (menuSelected: IMenu) => {
    dispatch(setMenu(menuSelected));
    dispatch(setDisplayPart("edit"));
  };

  const handleCreateMenu = () => {
    dispatch(resetStore());
    dispatch(setDisplayPart("edit"));
  };

  return(
    <Box className="menu">
      <Box className="drawer">
        <Box onClick={() => handleCreateMenu()} className="extraBox">
          <Box className="largeBox">
            <Box className="litleBox">
              <AddIcon className="iconDrawer" fontSize="large"/>
            </Box>
          </Box>
        </Box>
        <Box className="menuName">
          {
            menuMocked.map((menu) => {
              return(
                <Box key={menu.id} onClick={() => handleEditMenu(menu)} className="rowMenu">
                  <Typography variant="h6">{menu.name}</Typography>
                </Box>
              )
            })
          }
        </Box>
      </Box>
      <Box className="leftPart">
        <Component/>
      </Box>
    </Box>
  )
}

export default Menu;