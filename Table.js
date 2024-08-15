import React, { useState, useEffect } from 'react';


const Table = ({ dataElements }) => {
  const [values, setValues] = useState({});

  const handleValueChange = (id, value) => {
    setValues({
      ...values,
      [id]: value,
    });
  };

  const calculatePercent = (value) => {
    return ((value / 40) * 100).toFixed(2);
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Data Element Name</th>
          <th>Value</th>
          <th>Percent = (Value/40)*100</th>
        </tr>
      </thead>
      <tbody>
        {dataElements.map((element) => (
          <tr key={element.id}>
            <td>{element.name}</td>
            <td>
              <input
                type="number"
                value={values[element.id] || ''}
                onChange={(e) =>
                  handleValueChange(element.id, e.target.value)
                }
              />
            </td>
            <td>{calculatePercent(values[element.id] || 0)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
