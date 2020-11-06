import React, {useState } from 'react';
import Select from './../../common/components/Select';
import DataFetching from './../../common/components/DataFetching';

if (process.env.NODE_ENV === "development") {
  const { Server } = require("miragejs");
  const { sales, subscriptions } = require("../../mocks");

  new Server({
    routes() {
      this.namespace = process.env.REACT_APP_BASE_URL;
      this.get("sales/", () => sales);
      this.get("subscriptions/", () => subscriptions);
    }
  });
}

const optionsForSelect = [
  { 
    label: "Sales", 
    value: `${process.env.REACT_APP_BASE_URL}/sales/` 
  },
  {
    label: "Subscriptions",
    value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
  }
];

const FirstContainer = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState("");
  const [dataLimit, setDataLimit] = useState('5');

  function handleSelectChange(e) {
    setSelectedEndpoint(e.target.value);
  }

  function handleLimitChange(e) {
    setDataLimit(e.target.value);
  }

  return (
    <div>
      <Select
        id="select-data"
        label="Select the required data to view:" 
        handleChange={handleSelectChange}
        options={optionsForSelect}
      />
      <label>Result Limit:</label>
      <input type="text" value={dataLimit}  onChange={handleLimitChange}/>
      <DataFetching 
        endpoint={selectedEndpoint} 
        limit={dataLimit}
        />
    </div>
  );
};

export default FirstContainer;
