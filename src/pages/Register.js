// Register
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://connections-api.herokuapp.com/users/signup', user);
      console.log('User registered:', response.data);
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
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </label>
        <br />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;


