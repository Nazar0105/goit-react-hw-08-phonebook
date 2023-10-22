// PrivateRoute.js:
// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';


const PrivateRoute = ({ redirectTo, children }) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  if (!user) {
    navigate(redirectTo);
    return null;
  }

  return children;
};

export default PrivateRoute;
