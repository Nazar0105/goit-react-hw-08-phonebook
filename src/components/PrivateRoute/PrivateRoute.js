// PrivateRoute.js
// Оновлено імпорти та користування селектором
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/userSlice';

const PrivateRoute = ({ redirectTo, children }) => {
  const token = useSelector(selectToken); // Оновлено селектор
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate(redirectTo);
    }
  }, [token, navigate, redirectTo]);

  if (!token) {
    return null;
  }

  return children;
};

export default PrivateRoute;
