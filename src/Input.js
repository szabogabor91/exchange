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
      <h1 className='header1'>Deviza váltás</h1>
      <div className='header2'>Forint (HUF)</div>
      <input className='form-control' type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />
      <h3 className='rates'>{amount} HUF = {Math.round(amount * EUR * 100) / 100} EUR</h3>
      <h3 className='rates'>{amount} HUF = {Math.round(amount * USD * 100) / 100} USD</h3>
      <div className='header3'>Árfolyam:</div>
      <div className='below300'>1 EUR = 250 HUF</div>
      <div className='above300'>1 USD = 350 HUF</div>
      {/* Ha működne a lekérés, így nézne ki:
      <div className={amountTotal > 300 ? 'above300' : 'below300'}>1 EUR = {EUR * rate.HUF} EUR</div>
      <div className={amountTotal > 300 ? 'above300' : 'below300'}>1 USD = {USD * rate.HUF} USD</div> */}
    </div>
  );
};

export default Input;
