import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1" paragraph>
        An unexpected error occurred. Please try again later.
      </Typography>
      <Button variant="contained" onClick={handleGoHome}>
        Go Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
