import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, clearToken, selectUser } from '../../redux/userSlice';
import { logoutUser } from '../../api';

const UserMenu = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logoutUser(token); // Оновив цей рядок для передачі токену до logoutUser
      localStorage.removeItem('token');
      dispatch(clearToken());
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Welcome(-_-)</p>
      )}
    </div>
  );
};

export default UserMenu;
