import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Routes, Route } from 'react-router-dom';
import ContactList from '../components/ContactList/ContactList';
import Contacts from 'pages/Contacts';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { fetchContacts } from '../redux/contactsSlice';
import { selectUser, clearUser, setUser } from '../redux/userSlice';
import { selectContactsCount } from '../redux/contactsSlice';
import styles from './App.module.css';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const contactsCount = useSelector(selectContactsCount);

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
      <p>Total Contacts: {contactsCount}</p>
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
          path="/contacts/*"
          element={
            <PrivateRoute redirectTo="/login">
              <Routes>
                <Route index element={<Contacts />} />
                <Route path="contact-list" element={<ContactList />} />
              </Routes>
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <Login />
            </RestrictedRoute>
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <Register />
            </RestrictedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
