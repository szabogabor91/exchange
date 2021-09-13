import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Input = () => {
  const [amount, setAmount] = useState();
  const [rate, setRate] = useState([]);

  const getRate = async () => {
    try {
      const response = await axios.get(
        'https://api.exchangerate.host/latest?base=huf'
      );
      setRate(response.data);
      console.log(rate);
    } catch {
      console.error('Nem sikerült a lekérés.');
    }
  };

  useEffect(() => {
    getRate();
  }, []);

  return (
    <div className='form-group'>
      <h1>Deviza váltás</h1>
      <div>Forint (HUF)</div>
      <input className='form-control' type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />
      <div>{amount}</div>
      {rate.map(el => {
        return (
          <div>{el.USD}</div>
        );
      })}
    </div>
  );
};

export default Input;
