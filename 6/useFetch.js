import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.log(response.status)
        }
        const result = await response.json();
        setData(result);
        setIsLoading(false);
        setHasError(null);
      } catch (error) {
        setData(null);
        setIsLoading(false);
        setHasError(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, hasError };
};

export default useFetch;
