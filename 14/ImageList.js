import React, { useEffect, useState } from 'react';
import { storage } from './firebase';

const ImageList = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
   const storageRef = storage.ref('images');
    storageRef.listAll().then((result) => {
      const urls = result.items.map((item) => item.getDownloadURL());
      Promise.all(urls).then(setImageUrls);
    });
  }, []);

  const handleDeleteImage = async (imageName) => {
    const imageRef = storage.ref(`images/${imageName}`);
    await imageRef.delete();
    const storageRef = storage.ref('images');
    storageRef.listAll().then((result) => {
      const urls = result.items.map((item) => item.getDownloadURL());
      Promise.all(urls).then(setImageUrls);
    });
  };

  return (
    <div>
      <h2>Lista imagenes</h2>
      <ul>
        {imageUrls.map((imageUrl, index) => (
          <li key={index}>
            <img src={imageUrl} alt={`Image ${index}`} />
            <button onClick={() => handleDeleteImage(`image-${index}.jpg`)}>
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageList;
