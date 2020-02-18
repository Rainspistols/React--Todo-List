import React from 'react';
import SearchPanel from '../components/search-panel';
import ItemStatusFilter from '../components/item-status-filter';

const SearchAndFilter = () => {
  return (
    <div className='d-flex mb-2 justify-content-between flex-nowrap'>
      <SearchPanel />
      <ItemStatusFilter />
    </div>
  );
};

export default SearchAndFilter;
