// UserMenu
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, clearUser } from '../../redux/userSlice';
import { logoutUser } from '../../api'; 
import { Link } from 'react-router-dom'; 

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      // Виконати вихід користувача, можливо, відправивши запит на сервер
      await logoutUser(); // Викликати функцію виходу з облікового запису

      // Відправити дію для очищення користувача в Redux
      dispatch(clearUser());
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Logout</button>
          <ul>
            <li>
              <Link to="/contacts/list">List</Link>
            </li>
            <li>
              <Link to="/contacts/filter">Filter</Link>
            </li>
          </ul>
        </div>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
};

export default UserMenu;
