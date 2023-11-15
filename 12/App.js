
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  decrement, incrementBy } from './actions';

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementBy(5))}>Increment by 5</button>
    </div>
  );
};

export default App;
