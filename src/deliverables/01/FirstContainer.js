import React, { useState, useEffect }   from 'react';
import SelectElement from './SelectElement';
import { createServer } from "miragejs";
import {sales, subscriptions} from './../../mocks';

console.log("mocks ", subscriptions);

const BASE_API_URL = process.env.REACT_APP_BASE_URL || '/api';
let server = createServer();
server.get(`${BASE_API_URL}/sales/`, sales);
server.get(`${BASE_API_URL}/subscriptions/`, subscriptions);


const FirstContainer = () => {

  let [mockData, setMockData] = useState([])

  useEffect(() => {
    fetch(`${BASE_API_URL}/subscriptions`)
      .then((res) => res.json())
      .then((json) => {
        setMockData(json)
      })
  }, 
  []);

  console.log(mockData);

  return (
    <div>
      <h1>First Container: Sales &amp; Subscriptions</h1>
      <SelectElement />
    </div>
  );
};

export default FirstContainer;
