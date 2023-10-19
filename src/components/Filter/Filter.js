// Filter.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        className={styles.input}
      />
    </label>
  );
};

export default Filter;
