import React from 'react';

const TableItem = ( {id, done, title, description, date, importance, toggleChecked}) => (
  <tr>
    <td>{id}</td>
    <td><input type="checkbox" checked={done} onChange={() => toggleChecked(id)}/></td>
    <td title={description}>{title}</td>
    <td>{importance}</td>
    <td>{date.getDay()}</td>
  </tr>
)

export default TableItem;