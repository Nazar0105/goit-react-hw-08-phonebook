// App
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ContactList from '../components/ContactList/ContactList';
import Contacts from 'pages/Contacts';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { fetchContacts } from '../redux/contactsSlice';
import { selectToken, clearToken, setToken } from '../redux/userSlice';
import { selectContactsCount } from '../redux/contactsSlice';
import styles from './App.module.css';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  // eslint-disable-next-line
  const contactsCount = useSelector(selectContactsCount);

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if (localToken) {
      dispatch(setToken(localToken));
      dispatch(fetchContacts(localToken)); // Оновив цей рядок для передачі токену до fetchContacts
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(clearToken());
  };

  return (
    <div className={styles.container}>
      <Header /> {/* Додав компонент Header */}
      <Navigation onLogout={handleLogout} token={token} />
      <Routes>
        <Route
          path="/contacts/*"
          element={
            <PrivateRoute redirectTo="/login" token={token}>
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
