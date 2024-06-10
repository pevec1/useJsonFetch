import { useState, useEffect } from 'react'

export const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
  fetch(import.meta.env.VITE_API_BASE_URL + url, opts)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(true);
      });
// eslint-disable-next-line react-hooks/exhaustive-deps
},[url])

  return [data, error, isLoading];
}
