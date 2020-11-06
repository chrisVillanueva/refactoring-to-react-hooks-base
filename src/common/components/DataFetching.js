import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DataFetching = ({ endpoint, limit }) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        setData((
          (limit) ? json.slice(0, limit) : json
        ));
      });
  }, [endpoint])
  
  return (
    <ul>
      {data.map(element => (
        <li key={element.timestamp}>
          {element.timestamp} - {element.amount}
        </li>
      ))}
    </ul>
  );
};

DataFetching.propTypes = {
  endpoint: PropTypes.string.isRequired,
  limit:PropTypes.string,
};

export default DataFetching;
