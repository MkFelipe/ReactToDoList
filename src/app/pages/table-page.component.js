import React, {Component} from 'react';

class Form extends Component  {
  handleSubmit = (ev) => {
    ev.preventDefault();
    let title = this.refs.title.value;
    if(title) {
      this.props.onAdd({
        title
      });
      ev.target.reset();
    }
  }
  render() {
    return (<form onSubmit={this.handleSubmit}>
        <input ref="title" placeholder="Title" autofocus="true" />
        <button>Add</button>
    </form>);
  }
}

export default Form;