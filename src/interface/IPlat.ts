export interface IPlat {
  idPlat: number;
  nom: string;
  prixUnitaire: number;
  type: "entree" | "plat" | "dessert";
  usedProductIds: number[];
  selectedInMenu?: boolean
}
