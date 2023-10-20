// Navigation
import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

const SubMenu = () => {
  return (
    <ul>
      <li>
        <Link to="/contacts/list">Contact List</Link> {/* Оновлений шлях для списку контактів */}
      </li>
      <li>
        <Link to="/contacts/filter">Filter</Link> {/* Оновлений шлях для фільтрації */}
      </li>
    </ul>
  );
};

const Navigation = () => {
  return (
    <div>
      <MainMenu />
      <SubMenu />
    </div>
  );
};

export default Navigation;
