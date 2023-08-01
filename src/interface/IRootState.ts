import { PartEnumType } from "../constant/PartEnum";
import { IMenu } from "./IMenu";

export interface RootState {
  displayPart: PartEnumType;
  menu?: IMenu;
}