import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Form from './app/pages/table-page.component';
import Filter from './app/components/filter/filter.componet';
import Table from './app/components/table/table.component';
import { getItems } from './app/api';

class App extends Component {
  state = {
    items: []
  }
  constructor() {
    super();
    getItems().then((items) => {
      console.log(items);
      this.setState({
        items
      });
    });
  }

  addTask = ({title}) => {
    this.setState({
      items: [{
        id: Date.now(),
        title,
        date: new Date()
      }, ...this.state.items]
    });
  }

  toggleChecked = (id) => {
    this.setState({
      items: this.state.items.map((item) => (item.id !== id ) ? item : {
          ...item,
          done: !item.done
        }
      )
    })
  }

  render() {
    return (
      <div>
        We have {this.state.items.length} item(s)
        <Form onAdd={this.addTask}/>
        <Filter />
        <Table items={this.state.items} toggleChecked={this.toggleChecked}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
