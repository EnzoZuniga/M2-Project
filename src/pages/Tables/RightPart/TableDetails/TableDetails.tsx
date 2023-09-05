import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, FormControlLabel, Switch, Tab, Typography } from "@mui/material";
import React from "react";
import { ICommande } from "../../../../interface/ICommande";
import Bill from "./Tabs/Bill";
import Order from "./Tabs/Order";
import { useSelector } from "react-redux";
import { RootState } from "../../../../interface/IRootState";

interface IProps{
  id: number
}

const TableDetails: React.FC<IProps> = ({id}) => {

  const [value, setValue] = React.useState('1');
  const [available, setAvailable] = React.useState(true);
  const commande = useSelector((state: RootState) => state.currentCommande) as ICommande;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return(
    <Box sx={{ width: '100%', padding: "3em"}}>
      <Box sx={{marginBottom: "2em"}}>
        <FormControlLabel control={<Switch defaultChecked onClick={() => setAvailable(!available)} />} label={<Typography variant="body1">{available ? "Disponible" : "Occupé"}</Typography>} />
      </Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Commande" value="1" />
            <Tab label="Addition" value="2" />
          </TabList>
        </Box>
        <TabPanel sx={{height: "70vh"}} value="1">
          <Order idTable={id} />
        </TabPanel>
        <TabPanel sx={{height: "70vh"}} value="2">
          <Bill commande={commande}/>
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default TableDetails;