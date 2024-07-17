// src/components/Dashboard.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Container className="container">
     <Typography variant="h4" style={{ color: 'blue' }}>
  Library Management Dashboard
</Typography>

     
      <Outlet />
    </Container>
  );
};

export default Dashboard;
