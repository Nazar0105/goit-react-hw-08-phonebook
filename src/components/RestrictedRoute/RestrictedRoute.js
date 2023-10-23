import { useEffect } from 'react'; // Імпортуємо useEffect
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

const RestrictedRoute = ({ redirectTo, children }) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(redirectTo);
    }
  }, [user, navigate, redirectTo]); // Включаємо залежності

  if (user) {
    return null;
  }

  return children;
};

export default RestrictedRoute;
