import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'; // Зверніть увагу на зміну імпорту
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import UserMenu from '../components/UserMenu/UserMenu';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { fetchContacts } from '../redux/contactsSlice';
import styles from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/contacts" element={<UserMenu />}>
        <Route index element={<ContactForm />} />
       <Route path="list" element={<ContactList />} /> {/* Оновлений шлях для списку контактів */}
       <Route path="filter" element={<Filter />} /> {/* Оновлений шлях для фільтрації */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
