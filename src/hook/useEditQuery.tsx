import React from "react";
import { IMenu } from "../interface/IMenu";
import axios from "axios";

export function useEditQuery() {

  const getMenus = async (): Promise<IMenu[]> => {
    try {
      const response = await axios.get("/api/menus");
      return response.data as IMenu[];
    } catch (error) {
      console.error("Erreur lors de la récupération des menus :", error);
      return [];
    }
  };

  const postMenu = async (menu: IMenu) => {
    try {
      await axios.post("/api/menus", menu);
      console.log("Menu ajouté avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'ajout du menu :", error);
    }
  };
  
  const putMenu = async (id: number, menu: IMenu) => {
    try {
      await axios.put(`/api/menus/${id}`, menu);
      console.log("Menu mis à jour avec succès !");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du menu :", error);
    }
  };

  return{
    getMenus,
    postMenu,
    putMenu
  }
}