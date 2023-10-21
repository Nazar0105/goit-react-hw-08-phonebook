// UserMenu
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, clearUser } from '../../redux/userSlice';
import { logoutUser } from '../../api'; 
import { Link } from 'react-router-dom'; 

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      
      if (response.status === 200) {
        localStorage.removeItem('token');
        dispatch(clearUser());
      } else {
        // Обробка помилки в разі невдалого виходу
        console.error('Failed to logout');
      }
    } catch (error) {
      // Обробка помилки, якщо запит взагалі не вдалося виконати
      console.error('Failed to logout');
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>{user.email}</p>
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

