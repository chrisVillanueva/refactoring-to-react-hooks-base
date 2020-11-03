import React, {useState, useEffect} from 'react';
import SelectElement from './SelectElement';
import useFetch from './useFetch';

const selectOptions = [
  { key: 'fec9a652-1dd4-11eb-adc1-0242ac120002', label: 'Sales' },
  { key: '092e6521-d71c-4d44-9c08-21a2ec987c9c', label: 'Subscriptions' }
];

const FirstContainer = () => {
  const [currentSelection, setCurrentSelection] = useState('');
  const {status, mockData} = useFetch(currentSelection);
  const fetchStatus = (status.id === 1) ? status.type : '';
  let dataList = (mockData.length > 0) 
      ? mockData.map( (d, i) => <li key={i}> {d.timestamp} - {d.amount}</li>)
       : ''; 
  const handleSelectChange = (e) => {
    setCurrentSelection(e.target.value);
    dataList = '';
  };
  return (
    <div>
      <h1>Sales &amp; Subscriptions Data</h1>
      { fetchStatus}
      <SelectElement 
        value={currentSelection} 
        handleChange={handleSelectChange} 
        options={selectOptions} 
        />
        { dataList && (
          <ul>
            {dataList}
          </ul>
        )}
    </div>
  );
};

export default FirstContainer;
