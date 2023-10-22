// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import ContactList from '../components/ContactList/ContactList';
import UserMenu from '../components/UserMenu/UserMenu';
import Contacts from 'pages/Contacts'; // Імпорт Contacts
import Register from '../pages/Register';
import Login from '../pages/Login';
import { fetchContacts } from '../redux/contactsSlice';
import { selectUser, clearUser, setUser } from '../redux/userSlice';
import { selectContactsCount } from '../redux/contactsSlice'; // Імпорт selectContactsCount
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const contactsCount = useSelector(selectContactsCount); // Використання selectContactsCount

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setUser({ token }));
      dispatch(fetchContacts());
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(clearUser());
  };

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <p>Total Contacts: {contactsCount}</p> {/* Відображення загальної кількості контактів */}
      <nav>
        {user ? (
          <ul>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
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
        <Route
          path="/contacts"
          element={
            user ? <UserMenu /> : <Navigate to="/login" />
          }
        >
          <Route index element={<Contacts />} /> {/* Використовую компонент Contacts тут */}
          <Route path="list" element={<ContactList />} />
        </Route>
        <Route
          path="login"
          element={
            user ? <Navigate to="/contacts" /> : <Login />
          }
        />
        <Route
          path="register"
          element={
            user ? <Navigate to="/contacts" /> : <Register />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
