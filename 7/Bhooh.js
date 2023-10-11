import React, { useState } from 'react';
import Bconsulta from './bconsulta';
import useCounter from './useCounter'; 

const Bhooh = () => {
  const counter = useCounter(1); 

  return (
    <div>
      <h2>Breaking Bad Quotes</h2>
      <p>Counter: {counter.count}</p>
      <button onClick={counter.increment}>aumentar</button>
      <button onClick={counter.decrement}>restar</button>
      <Bconsulta counter={counter.count} />
    </div>
  );
};

export default Bhooh;