import React from 'react';
import useFetch from './useFetch';

const Bconsulta = ({ counter }) => {
  const apiUrl = `https://breakingbadapi.com/api/quotes/${counter}`;
  const { data, isLoading } = useFetch(apiUrl);

  return (
    <div>
    {isLoading ? (
      <p>Loading...</p>
    ) : data ? (
      <blockquote>{data[0]?.quote}</blockquote>
    ) : (
      <p>No data available</p>
    )}
  </div>
  );
};

export default Bconsulta;
