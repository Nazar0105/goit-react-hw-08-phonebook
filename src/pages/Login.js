// Login
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios'; // Додайте імпорт Axios
import { setUser } from '../redux/userSlice';

const Login = () => {
  const [user, setUserState] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserState({ ...user, [name]: value });
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://connections-api.herokuapp.com/users/login', user); // Виконуємо логін за допомогою Axios
      if (response.status === 200) {
        const data = response.data;
        console.log('User logged in:', data);
        localStorage.setItem('token', data.token);
        dispatch(setUser({ token: data.token }));
        navigate('/contacts');
      } else {
        setError('Login failed. Please check your email and password.');
      }
    } catch (error) {
      setError('Login failed. Please check your email and password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handlePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
