import React, { useState } from 'react';

const FilterSortComponent = ({ onFilter, onSort, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearch(e.target.value);
        }}
      />
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <select onChange={(e) => onSort(e.target.value)}>
        <option value="date">Sort by Date</option>
        <option value="priority">Sort by Priority</option>
      </select>
    </div>
  );
};

export default FilterSortComponent;