import React, { useState } from 'react';
import { GifGrid } from './components/GifGrid';
import { AddCategory } from './components/AddCategory';
import useCounter from './useCounter'; 

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Zodiac']);
  const counter = useCounter(0);

  const onAddCategory = (category) => {
    setCategories((list) => [...list, category]);
  };

  return (
    <>
      <h1>GifExpert</h1>
      <p>Counter: {counter.count}</p>
      <button onClick={counter.increment}>Increment</button>
      <button onClick={counter.decrement}>Decrement</button>
      <button onClick={counter.reset}>Reset</button>

      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
