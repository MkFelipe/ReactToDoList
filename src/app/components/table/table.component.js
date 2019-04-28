import React, {Component} from 'react';

import TableItem from './table-item';
import TableHeader from './table-header';
import sortBy from '../../utils/sort';

import './table.component.css';

const columns = ['id', 'done', 'title', 'importance', 'date'];

class TableComponent extends Component  {
  state = {
    sortBy: 'id',
  }
  handleSort = (sortBy) => {
    this.setState({sortBy});
  }
  render() {
    let toggleChecked = this.props.toggleChecked;
    let sortedItems = sortBy(
      this.props.items,
      this.state.sortBy
    );

    return (<table>
      <TableHeader 
        onSort={this.handleSort} 
        columns={columns} />
      {sortedItems.map((item) => (
        <TableItem 
          key={item.id} 
          {...item} 
          toggleChecked={toggleChecked} />)
        )}
    </table>);
  }
}

export default TableComponent;