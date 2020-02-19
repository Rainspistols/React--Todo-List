import React, { Component } from 'react';

export default class ItemAddBtn extends Component {
  state = {
    label: ''
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.label) {
      this.props.onItemAdded(this.state.label);
    }
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className='input-group mb-2' onSubmit={this.onSubmit}>
        <input
          type='text'
          className='form-control'
          placeholder='Add a todo ...'
          aria-label='Add a todo ...'
          aria-describedby='button-addon2'
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <div className='input-group-append'>
          <button
            className='btn btn-outline-secondary'
            type='sumbit'
            id='button-addon2'
          >
            Add Todo
          </button>
        </div>
      </form>
    );
  }
}
