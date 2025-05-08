import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import useEmiCalculator from '../hooks/useEmiCalculator';

const Home = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(5);
  const tenureMonths = tenureYears * 12;

  const emi = useEmiCalculator(principal, rate, tenureMonths);
  const [calculatedEmi, setCalculatedEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const handleCalculate = () => {
    setCalculatedEmi(emi);
    const totalPay = emi * tenureMonths;
    setTotalPayment(totalPay);
    setTotalInterest(totalPay - principal);
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Loan Calculator Dashboard
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <TextField
          label="Loan Amount"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
          fullWidth
        />
        <TextField
          label="Interest Rate (%)"
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          fullWidth
        />
        <TextField
          label="Term (Years)"
          type="number"
          value={tenureYears}
          onChange={(e) => setTenureYears(Number(e.target.value))}
          fullWidth
        />
      </Box>
      <Button variant="contained" onClick={handleCalculate}>
        CALCULATE
      </Button>
      {calculatedEmi !== null && (
        <>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Monthly EMI: ₹{calculatedEmi.toFixed(2)}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            Total Interest Payable: ₹{totalInterest.toFixed(2)}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            Total Payment (Principal + Interest): ₹{totalPayment.toFixed(2)}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default Home;
