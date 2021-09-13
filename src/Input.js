import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Input = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState([]);
  const USD = 0.003369;
  const EUR = 0.002858;

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
      <h3 className='rates'>{amount} HUF = {Math.round(amount * USD * 100) / 100} USD</h3>
      <h3 className='rates'>{amount} HUF = {Math.round(amount * EUR * 100) / 100} EUR</h3>
    </div>
  );
};

export default Input;
