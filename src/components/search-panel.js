import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
  return (
    <input
      className='form-control search-panel mr-2'
      type='text'
      placeholder='Type to search'
      aria-label='Type to search'
    />
  );
};

export default SearchPanel;
