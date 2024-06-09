import { useState, useEffect, useRef } from 'react'

export const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const timestampRef = useRef(0);

  function loadData(){
    setIsLoading(true);
    setTimeout(() => {
      timestampRef.current = Date.now();
    fetch(url, opts)
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
        setIsLoading(false);
      });
    }, 100);
  }
  useEffect(loadData, [url, opts]); // componentDidMount

  return [data, error, isLoading];
}
