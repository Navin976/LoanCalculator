import { useState, useEffect } from 'react';

const useEmiCalculator = (principal, rate, tenure) => {
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    if (principal > 0 && rate > 0 && tenure > 0) {
      const monthlyRate = rate / (12 * 100);
      const emiValue =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1);
      setEmi(emiValue);
    } else {
      setEmi(0);
    }
  }, [principal, rate, tenure]);

  return emi;
};

export default useEmiCalculator;
