import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.value);

  const handleFilterChange = (e) => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        className={styles.input}
      />
    </label>
  );
};

export default Filter;
