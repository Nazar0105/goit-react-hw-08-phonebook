// store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { filterReducer } from './filterSlice';
import userReducer from './userSlice';
import thunk from 'redux-thunk'; // Імпортуємо redux-thunk

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: userReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk], // Додаємо redux-thunk до middleware
});
