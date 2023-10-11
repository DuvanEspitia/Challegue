import React, { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
  const [categoryInput, setCategoryInput] = useState('');
  const [textInput, setTextInput] = useState('');

  const handleCategoryInputChange = (evt) => {
    setCategoryInput(evt.target.value);
  };

  const handleTextInputChange = (evt) => {
    setTextInput(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (categoryInput.trim() !== '' && textInput.trim() !== '') {
      onAddCategory(categoryInput + ' - ' + textInput);
      setCategoryInput('');
      setTextInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una categoría"
        value={categoryInput}
        onChange={handleCategoryInputChange}
      />
      <input
        type="text"
        placeholder="Escribe un texto"
        value={textInput}
        onChange={handleTextInputChange}
      />
      <button type="submit">Agregar Categoría</button>
    </form>
  );
};
