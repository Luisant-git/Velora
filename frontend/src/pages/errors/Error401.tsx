import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Error401: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h1" color="error">401</Typography>
      <Typography variant="h4" gutterBottom>Unauthorized</Typography>
      <Button variant="contained" onClick={() => navigate('/login')}>
        Go to Login
      </Button>
    </Box>
  );
};

export default Error401;