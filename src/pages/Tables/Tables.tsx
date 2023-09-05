import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import "./Tables.css"
import { ITable } from "../../interface/ITable";
import { Box, Typography } from "@mui/material";
import TableDetails from "./RightPart/TableDetails/TableDetails";
import Default from "./RightPart/Default";

const mockedTables: ITable[] = [
  {
    id: 1,
    available: true
  },
  {
    id: 2,
    available: false
  },
  {
    id: 3,
    available: true
  },
  {
    id: 4,
    available: false
  },
  {
    id: 5,
    available: true
  },
]

const Tables: React.FC = () => {

  const [selectedTable, setSelectedTable] = useState<number>();

  const handleCreateTable = () => {
    console.log("table created")
  }

  const handleEditTable = (table: ITable) => {
    console.log("table edited")
    setSelectedTable(table.id)
  }

  return(
    <Box className="menu">
      <Box className="drawer">
        <Box className="tableName">
          {
            mockedTables.map((table, index) => {
              return(
                <Box key={table.id}
                     onClick={() => handleEditTable(table)}
                     className={`rowTable ${selectedTable === table.id && "selectedTable"} ${table.available ? "available" : "unvailable"}`}
                >
                  <Typography variant="h6">{index + 1}</Typography>
                </Box>
              )
            })
          }
        </Box>
        <Box onClick={() => handleCreateTable()} className="extraBox">
          <Box className="largeBox">
            <Box className="litleBox">
              <AddIcon className="iconDrawer" fontSize="large"/>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="leftPart">
        {
          selectedTable ? <TableDetails id={selectedTable}/> : <Default/>
        }
      </Box>
    </Box>
  )
}

export default Tables;