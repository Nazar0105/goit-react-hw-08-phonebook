import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,  Routes, Route } from 'react-router-dom';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Navigation from '../components/Navigation/Navigation';
import UserMenu from '../components/UserMenu/UserMenu';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { fetchContacts } from '../redux/contactsSlice';
import { selectUser } from '../redux/userSlice';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchContacts());
    }
  }, [dispatch, user]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <nav>
        {user ? (
          <ul>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/contacts/list">List</Link>
            </li>
            <li>
              <Link to="/contacts/filter">Filter</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
      </nav>
      <Routes>
        <Route path="/contacts" element={<UserMenu />}>
          <Route index element={<ContactForm />} />
          <Route path="list" element={<ContactList />} />
          <Route path="filter" element={<Filter />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;

export { ContactForm, ContactList, Filter, Navigation, UserMenu, Register, Login };
