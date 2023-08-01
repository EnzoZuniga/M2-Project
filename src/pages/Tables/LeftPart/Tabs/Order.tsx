import { Box } from "@mui/material";
import React from "react";

interface IProps{
  id: number
}

const Order: React.FC<IProps> = ({id}) => {
  return(
    <Box>
      Table Order {id}
    </Box>
  )
}

export default Order;