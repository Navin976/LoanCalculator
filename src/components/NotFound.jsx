import React from 'react';
import { Typography, Box } from '@mui/material';

const NotFound = () => {
  return (
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">
        The page you are looking for does not exist.
      </Typography>
    </Box>
  );
};

export default NotFound;
