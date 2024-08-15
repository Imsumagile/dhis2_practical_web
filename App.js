import React, { useState, useEffect } from 'react';
import Table from '../src/components/Table.js'
import axios from 'axios';

const App = () => {
  const [dataElements, setDataElements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://yourdomain/api/dataElements.json?fields=id,name,formName,valueType,domainType&filter=domainType:eq:AGGREGATE'
      );
      setDataElements(result.data.dataElements);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Data Capture Form</h1>
      <Table dataElements={dataElements} />
    </div>
  );
};

export default App;
