//import { useState } from 'react'
//import { useEffect } from "react";
import "./App.css";
import { useJsonFetch } from "./hooks/useJsonFetch";

function App() {
  const [data, error, isLoading] = useJsonFetch("/data", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const [data2, error2, isLoading2] = useJsonFetch(
    "/error",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const [data3, error3, isLoading3] = useJsonFetch(
    "/loading",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(data, error, isLoading);
  console.log(data2, error2, isLoading2);
  console.log(data3, error3, isLoading3);

    
  return (
    <>
      {data !== null && JSON.stringify(data) ? JSON.stringify(data) : "loading"}
      <br />
      {data2 !== null && JSON.stringify(data2)
        ? JSON.stringify(data2)
        : "loading"}
      <br />
      {data3 !== null && JSON.stringify(data3)
        ? JSON.stringify(data3)
        : "loading"}
    </>
  );
}

export default App;
