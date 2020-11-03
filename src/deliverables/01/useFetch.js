import { useState, useEffect } from 'react';
import { createServer } from "miragejs";
import { sales, subscriptions } from './../../mocks';

const BASE_API_URL = process.env.REACT_APP_BASE_URL || '/api';
let server = createServer();
server.get(`${BASE_API_URL}/sales/`, sales);
server.get(`${BASE_API_URL}/subscriptions/`, subscriptions);

const useFetch = (fetchType) => {
  const [status, setStatus] = useState({ id: 0, type: 'idle'});
  const [mockData, setMockData] = useState([])

  useEffect(() => {
    if (!fetchType) return;

    const fetchData = async()=>{
      setStatus({ id: 1, type: `fetching ${fetchType}` });
      const response = await fetch(`${BASE_API_URL}/${fetchType}`);
      const data = await response.json();
      setMockData(data.slice(0, 10));
      setStatus({ id: 2, type: `${fetchType} fetched` });
    };

    fetchData();
  },
  [fetchType]);

  return { status, mockData };
};

export default useFetch;
