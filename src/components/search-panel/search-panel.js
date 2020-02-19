import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  };
  onSearchChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    const { term } = this.state;

    return (
      <input
        className='form-control search-panel mr-2'
        type='text'
        placeholder='Type to search'
        aria-label='Type to search'
        onChange={this.onSearchChange}
        value={term}
      />
    );
  }
}
