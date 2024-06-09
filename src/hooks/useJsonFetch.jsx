import { useState, useEffect, useRef } from 'react'

export const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
const timestampRef = useRef(0);

  function loadData(){
  
    setTimeout(() => {
      timestampRef.current = Date.now();
    fetch(url, opts)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setIsLoading(true);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(true);
      });
    }, 2000);
  }
  useEffect(loadData, [url, opts]); // componentDidMount
    useEffect(() => {
      if (isLoading === true) {
        clearTimeout(timestampRef.current);
      }
    });

  return [data, error, isLoading];
}
