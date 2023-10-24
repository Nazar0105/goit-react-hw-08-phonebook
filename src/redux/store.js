// store
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { filterReducer } from './filterSlice';
import userReducer from './userSlice';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // Список редуксів, які ви хочете зберегти
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    user: persistedReducer, // Використовуємо персистований редукс для користувача
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

export const persistor = persistStore(store);

