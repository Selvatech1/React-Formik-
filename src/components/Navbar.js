// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 2 }}>
          Library Management System
        </Typography>
        <Button color="inherit" component={Link} to="/books">Books</Button>
        <Button color="inherit" component={Link} to="/books/add">Add Books</Button>
        <Button color="inherit" component={Link} to="/authors/add">Add Authors</Button>
        <Button color="inherit" component={Link} to="/authors">Authors</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
