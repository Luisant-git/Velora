import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" gutterBottom>Welcome to Velora</Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>Business Management System</Typography>
      <Button variant="contained" size="large" onClick={() => navigate('/login')}>
        Get Started
      </Button>
    </Box>
  );
};

export default Landing;