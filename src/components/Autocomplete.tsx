import { CheckBoxOutlineBlank, CheckBox } from "@mui/icons-material";
import { Checkbox, TextField, Autocomplete as AutocompleteMUI, Typography, AutocompleteProps } from "@mui/material";
import React, { useEffect } from "react";
import { IPlat } from "../interface/IPlat";

type TOmitAutocompleteProps = Omit<AutocompleteProps<any, any, any, any>, "freeSolo" | "disablePortal" | "fullWidth" | "renderInput" | "isOptionEqualToValue" | "id">;

// ... import statements

interface IProps extends TOmitAutocompleteProps {
  options: IPlat[];
  label: string;
  menu?: number[];
  setSelectedProps: React.Dispatch<React.SetStateAction<number[]>>;
}

const Autocomplete: React.FC<IProps> = ({ options, label, menu, setSelectedProps }) => {
  const [selectedOptions, setSelectedOptions] = React.useState<IPlat[]>([]);

  useEffect(() => {
    // Update the selectedOptions whenever the menu prop changes
    if (menu) {
      const filteredOptions = options.filter((option) => menu.includes(option.idPlat));
      setSelectedOptions(filteredOptions);
    } else {
      setSelectedOptions([]);
    }
  }, [menu, options]);

  const handleChange = (value: IPlat[]) => {
    setSelectedOptions(value);
    setSelectedProps(value.map((option) => option.idPlat));
  };

  return (
    <>
      <Typography>{label}</Typography>
      <AutocompleteMUI
        multiple
        options={options}
        value={selectedOptions}
        disableCloseOnSelect
        onChange={(event, newValue) => handleChange(newValue)}
        getOptionLabel={(option) => option.nom}
        renderOption={(props, option, { selected }) => (
          <li key={option.idPlat} {...props}>
            <Checkbox
              icon={<CheckBoxOutlineBlank fontSize="small" />}
              checkedIcon={<CheckBox fontSize="small" />}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.nom}
          </li>
        )}
        style={{ minWidth: "30em" }}
        renderInput={(params) => <TextField {...params} placeholder={`Choisir ${label}`} />}
      />
    </>
  );
};

export default Autocomplete;