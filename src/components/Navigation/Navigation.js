import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/userSlice';

const MainMenu = () => {
  const token = useSelector(selectToken);

  return (
    <nav>
      <ul>
        {token ? (
          <li>
            <Link to="/contacts"></Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const SubMenu = () => {
  const token = useSelector(selectToken);

  return (
    <ul>
      {token && (
        <>
          <li>
            <Link to="/contacts/list"></Link>
          </li>
          <li>
            <Link to="/contacts/filter"></Link>
          </li>
        </>
      )}
    </ul>
  );
};

const Navigation = ({ onLogout }) => {
  return (
    <div>
      <MainMenu />
      <SubMenu />
    </div>
  );
};

export default Navigation;