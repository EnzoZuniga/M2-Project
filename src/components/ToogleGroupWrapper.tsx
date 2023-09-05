import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import React from "react"
import { IPlat } from "../interface/IPlat";
import { IMenu } from "../interface/IMenu";

interface IProps {
  values: IPlat[];
  setValue: any;
  value: IPlat | null;
  menu: IMenu;
  type: string;
}

const ToogleGroupWrapper: React.FC<IProps> = ({value, values, setValue, menu, type}) => {

  const handleValue = (
    event: React.MouseEvent<HTMLElement>,
    newValue: IPlat | null,
  ) => {
    setValue(newValue);
  };

  return (
    <ToggleButtonGroup
            color="primary"
            value={value}
            exclusive
            onChange={handleValue}
            aria-label="text alignment"
          >
            {
              values.filter((plat) => plat.type === type && menu?.[type]?.includes(plat.idPlat)).map((plat) => {
                return(
                    <ToggleButton key={plat.idPlat} value={plat}>
                      {plat.nom}
                    </ToggleButton>
                  )
                })
            }
    </ToggleButtonGroup>

  )
}

export default ToogleGroupWrapper;