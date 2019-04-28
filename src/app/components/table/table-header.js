import React from 'react';

const TableHeader = ({onSort, columns}) => (
  <thead>
    <tr>
      {columns.map(name => (
        <th>
        {name}
        </th>
      ))}
    </tr>
    <tr>
      {columns.map(name => (
        <th>
        <button onClick={() => onSort(name)}>^</button><br />
        <button onClick={() => onSort(`-${name}`)}>v</button>
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;