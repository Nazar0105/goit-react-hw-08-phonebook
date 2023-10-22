//Routs
import React from 'react';
import ContactList from './components/ContactList/ContactList';
import { Routes, Route } from 'react-router-dom'; 
import Contacts from './pages/Contacts';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const AppRoutes = () => (
  <Routes>
    <PrivateRoute
      path="/contacts"
      redirectTo="/login"
      element={
        <>
          <Contacts />
          <Route path="list" element={<ContactList />} /> 
        </>
      }
    />
    <Route path="login" element={<Login />} /> 
    <Route path="register" element={<Register />} /> 
  </Routes>
);

export default AppRoutes;


