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
        <Link to="/contacts">Contact List</Link>
      </li>
      <li>
        <Link to="/filter">Filter</Link>
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
