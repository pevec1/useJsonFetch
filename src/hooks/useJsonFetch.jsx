import { useState } from 'react'

export const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
//const timestampRef = useRef(0);
    // eslint-disable-next-line no-undef
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

  return [data, error, isLoading];
}
