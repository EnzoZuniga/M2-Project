import { Paper, Box, Button, TextField, FormControl, InputAdornment, InputLabel, Input } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Autocomplete from "../../../../components/Autocomplete";
import "./EditLeftPart.css"
import { IMenu } from "../../../../interface/IMenu";
import { IPlat } from "../../../../interface/IPlat";
import { useEditQuery } from "../../../../hook/useEditQuery";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayPart } from "../../../../store/store";
import { RootState } from "../../../../interface/IRootState";
import { PartEnumType } from "../../../../constant/PartEnum";

const mockedPlats: IPlat[] = [
  // Entrées
  {
    idPlat: 1,
    nom: "Salade César",
    prixUnitaire: 8.99,
    type: "entree",
    usedProductIds: [1, 2, 3]
  },
  {
    idPlat: 2,
    nom: "Bruschetta",
    prixUnitaire: 7.50,
    type: "entree",
    usedProductIds: [4, 5, 6]
  },
  {
    idPlat: 3,
    nom: "Soupe à l'oignon",
    prixUnitaire: 6.99,
    type: "entree",
    usedProductIds: [7, 8, 9]
  },
  {
    idPlat: 4,
    nom: "Carpaccio de saumon",
    prixUnitaire: 9.50,
    type: "entree",
    usedProductIds: [10, 11, 12]
  },
  {
    idPlat: 5,
    nom: "Tartare de boeuf",
    prixUnitaire: 10.99,
    type: "entree",
    usedProductIds: [13, 14, 15]
  },
  // Plats principaux
  {
    idPlat: 6,
    nom: "Steak Frites",
    prixUnitaire: 15.99,
    type: "plat",
    usedProductIds: [16, 17, 18]
  },
  {
    idPlat: 7,
    nom: "Poulet rôti",
    prixUnitaire: 12.50,
    type: "plat",
    usedProductIds: [19, 20, 21]
  },
  {
    idPlat: 8,
    nom: "Pâtes carbonara",
    prixUnitaire: 10.99,
    type: "plat",
    usedProductIds: [22, 23, 24]
  },
  {
    idPlat: 9,
    nom: "Burger classique",
    prixUnitaire: 9.99,
    type: "plat",
    usedProductIds: [25, 26, 27]
  },
  {
    idPlat: 10,
    nom: "Sushi assorti",
    prixUnitaire: 14.99,
    type: "plat",
    usedProductIds: [28, 29, 30]
  },
  // Desserts
  {
    idPlat: 11,
    nom: "Tarte aux pommes",
    prixUnitaire: 6.50,
    type: "dessert",
    usedProductIds: [31, 32, 33]
  },
  {
    idPlat: 12,
    nom: "Crème brûlée",
    prixUnitaire: 7.99,
    type: "dessert",
    usedProductIds: [34, 35, 36]
  },
  {
    idPlat: 13,
    nom: "Mousse au chocolat",
    prixUnitaire: 5.99,
    type: "dessert",
    usedProductIds: [37, 38, 39]
  },
  {
    idPlat: 14,
    nom: "Cheesecake aux fruits rouges",
    prixUnitaire: 8.50,
    type: "dessert",
    usedProductIds: [40, 41, 42]
  },
  {
    idPlat: 15,
    nom: "Île flottante",
    prixUnitaire: 6.99,
    type: "dessert",
    usedProductIds: [43, 44, 45]
  }
];

const EditLeftPart: React.FC = () => {
  const { register, handleSubmit } = useForm<IMenu>();

  const displayPart = useSelector((state: RootState) => state.displayPart);
  const menu = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();

  const [plats, setPlats] = React.useState<number[]>([]); // State pour les plats
  const [entrees, setEntrees] = React.useState<number[]>([]); // State pour les entrées
  const [desserts, setDesserts] = React.useState<number[]>([]);
  const [part, setPart] = React.useState<PartEnumType>(displayPart)

  console.log(menu)

  const menuNameInitialValue = menu?.name || "";
  const menuPriceInitialValue = menu?.price || "";
  const menuInitialValue = menu && menu;
  
  const {postMenu, putMenu} = useEditQuery();

  useEffect(() => {
    dispatch(setDisplayPart(part))
  }, [part, dispatch])

  const onSubmit = async (data: IMenu) => {
    const newMenu: IMenu = {
      id: menuInitialValue?.id!,
      name: data.name,
      price: data.price,
      entree: entrees,
      plat: plats,
      dessert: desserts
    }

    try {
      if (menu) {
        await putMenu(menu.id, newMenu);
        setPart("update");
      } else {
        await postMenu(newMenu);
        setPart("succes");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du menu :", error);
    }
  };

  const handleAbort = () => {
    if(menu){
      setPart("delete")
      return;
    }
    setPart("default")
  }

  return(
    <form className="editWrapper" onSubmit={handleSubmit(onSubmit)}>
      <Paper className="menuItems">
        <Box>
          <Autocomplete setSelectedProps={setEntrees} menu={menuInitialValue?.entree} label={"Entrées"} options={mockedPlats.filter((plat) => plat.type === "entree")}/>
        </Box>
        <Box>
          <Autocomplete setSelectedProps={setPlats} menu={menuInitialValue?.plat} label={"Plats"} options={mockedPlats.filter((plat) => plat.type === "plat")}/>
        </Box>
        <Box>
          <Autocomplete setSelectedProps={setDesserts} menu={menuInitialValue?.dessert} label={"Desserts"} options={mockedPlats.filter((plat) => plat.type === "dessert")}/>
        </Box>
      </Paper>
      <Box className="formRight">
        <FormControl sx={{marginBottom: "1em"}} {...register("name", {required: true})} variant="standard" fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount">Nom du Menu</InputLabel>
          <Input value={menuNameInitialValue}/>
        </FormControl>
        <FormControl {...register("price", {required: true})} variant="standard" fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount">Prix</InputLabel>
          <Input value={menuPriceInitialValue}
                 endAdornment={<InputAdornment position="end">€</InputAdornment>}
          />
        </FormControl>
        <Box className="buttons">
          <Button variant="contained" type="submit">{menu ? "Modifier" : "Sauvegarder"}</Button>
          <Button onClick={() => handleAbort()} color="error">{menu ? "Supprimer" : "Annuler"}</Button>
        </Box>
      </Box>
    </form>
  )
}

export default EditLeftPart;
