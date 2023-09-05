import { PartEnumType } from "../constant/PartEnum";
import { ICommande } from "./ICommande";
import { IMenu } from "./IMenu";

export interface RootState {
  displayPart: PartEnumType;
  menu?: IMenu;
  currentCommande?: Partial<ICommande>;
}