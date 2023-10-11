import React, { useEffect, useState } from 'react';
import { GifItem } from '../GifItem'; 

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const url = `https://api.giphy.com/v1/gifs/search/tags?api_key=gBSNgi6nqoqO2V8mawy67CBFniaHfLtx&q=${category}&limit=25&offset=0`;
      const resp = await fetch(url);
      const { data } = await resp.json();
      const gifs = data.map((img) => {
        if (img.images && img.images.downsized_medium) {
          return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
          };
        } else {
          return null;
        }
      });
      setGifs(gifs.filter((gif) => gif !== null));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(gifs); 
  }, []);

  return (
    <div className="gif-grid">
      <h3>{category}</h3>
      {loading ? <p>Loading...</p> : null}
      <div className="gif-list">
        {gifs.map((gif) => (
          <GifItem key={gif.id} title={gif.title} />
        ))}
      </div>
    </div>
  );
};
