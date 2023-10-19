// store.js
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { filterReducer } from './filterSlice';
import userReducer from './userSlice'; // Імпортуємо userSlice

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: userReducer, // Додаємо userSlice до магазину
  },
});
