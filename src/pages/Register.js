// Оновлений Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../redux/userSlice';

const Register = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://connections-api.herokuapp.com/users/signup', newUser);
      console.log('User registered:', response.data);

      localStorage.setItem('token', response.data.token);
      dispatch(setToken(response.data.token));

      // Збереження даних користувача в Redux-стору
      dispatch(setUser(response.data.user)); // Використовуємо setUser для збереження даних користувача

      setIsRegistered(true);
    } catch (error) {
      setError('Registration failed. Please check your information and try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {isRegistered && <p style={{ color: 'green' }}>You have successfully registered!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={newUser.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={newUser.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={newUser.password}
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handlePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
