import React from 'react';
import useFetch from './useFetch'; 

const Consulta = () => {
  const url = `https://breakingbadapi.com/api/quotes/`; 
  const { data, isLoading, hasError } = useFetch(url);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>Error: {hasError.message}</p>;
  }

  return (
    <div>
    
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Consulta;
