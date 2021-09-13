import React, { useState } from 'react';

const Input = () => {
  const [amount, setAmount] = useState();
  const [rate, setRate] = useState([]);

    const getData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    setRate(response.data);
    console.log(userData);
  };

  return (
    <div className='form-group'>
      <h1>Deviza váltás</h1>
      <div>Forint (HUF)</div>
      <input className='form-control' type='number' value={amount} onChange={(e) => setAmount(e.target.value)} />
      <div>{amount}</div>
    </div>
  );
};

export default Input;
