import React from 'react';
import './Home.css';
import { Box, Paper, Typography } from '@mui/material';
import {TableBar, Restaurant, Inventory} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box className="Home">
      <Paper elevation={2}>
        <Link to="/pages/menu">
          <Restaurant fontSize="large" className="icon"/>
          <Typography variant="button" display="block" gutterBottom>Menu</Typography>
        </Link>
      </Paper>
      <Paper elevation={2}>
        <TableBar fontSize="large" className="icon"/>
        <Typography variant="button" display="block" gutterBottom>Tables</Typography>
      </Paper>
      <Paper elevation={2}>
        <Inventory fontSize="large" className="icon"/>
        <Typography variant="button" display="block" gutterBottom>Inventaire</Typography>
      </Paper>
    </Box>
  );
}

export default Home;
