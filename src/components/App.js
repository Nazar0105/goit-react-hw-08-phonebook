import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import ContactList from '../components/ContactList/ContactList';
import UserMenu from '../components/UserMenu/UserMenu';
import Contacts from 'pages/Contacts'; 
import Register from '../pages/Register';
import Login from '../pages/Login';
import { fetchContacts } from '../redux/contactsSlice';
import { selectUser, clearUser, setUser } from '../redux/userSlice';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
      <nav>
        {user ? (
          <ul>
            <li>
              <Link to="/contacts">Contacts</Link> {/* приватний роут */}
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/login">Login</Link> {/* публічний роут */}
            </li>
            <li>
              <Link to="/register">Register</Link> {/* публічний роут */}
            </li>
          </ul>
        )}
      </nav>
      <Routes>
        <Route path="/contacts" element={user ? <UserMenu /> : <Navigate to="/login" />}>
          <Route index element={<Contacts />} /> {/* Використовую Contacts як один із роутів */}
          <Route path="list" element={<ContactList />} />
        </Route>
        <Route
          path="login"
          element={user ? <Navigate to="/contacts" /> : <Login />}
        /> {/* публічний роут */}
        <Route
          path="register"
          element={user ? <Navigate to="/contacts" /> : <Register />}
        /> {/* публічний роут */}
      </Routes>
    </div>
  );
};

export default App;
