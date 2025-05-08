import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        About This App
      </Typography>
      <Typography variant="body1" paragraph>
        This Loan Calculator App is a modern, single-page web application built using React JS and Material UI. It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates.
      </Typography>
      <Typography variant="body1" paragraph>
        Features include:
        <ul>
          <li>Loan EMI calculation using standard financial formulas</li>
          <li>Dynamic amortization schedule table with monthly breakdown</li>
          <li>Real-time currency conversion of EMI using a live exchange rate API</li>
          <li>Paginated exchange rate table for 160+ currencies</li>
          <li>Dark/Light mode toggle for a customizable experience</li>
          <li>Collapsible header navigation on mobile screens</li>
          <li>Fully responsive UI built with Material UI</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        You can view the live deployment of this app <Link href="https://loan-calculator-kwcm.onrender.com/" target="_blank" rel="noopener">here</Link>.
      </Typography>
    </Box>
  );
};

export default About;
