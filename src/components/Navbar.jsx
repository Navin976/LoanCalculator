import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          Loan Calculator
        </Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Typography variant="subtitle1" component="div">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              HOME
            </Link>
          </Typography>
          <Typography variant="subtitle1" component="div">
            <Link to="/exchange" style={{ color: 'white', textDecoration: 'none' }}>
              EXCHANGE RATES (LIVE)
            </Link>
          </Typography>
          <Typography variant="subtitle1" component="div">
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
              ABOUT
            </Link>
          </Typography>
          <Typography variant="subtitle1" component="div">
            <Link to="/error" style={{ color: 'white', textDecoration: 'none' }}>
              ERROR PAGE
            </Link>
          </Typography>
          <Switch
            checked={mode === 'dark'}
            onChange={toggleTheme}
            color="default"
            inputProps={{ 'aria-label': 'toggle theme' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
