// UserMenu
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, clearUser } from '../../redux/userSlice';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser()); // Викликаємо clearUser для виходу з облікового запису
  };

  return (
    <div>
      {user ? (
        <div>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
};

export default UserMenu;
