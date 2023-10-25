// RegisterForm
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './RegisterForm.styles';

// Компонент RegisterForm відповідає за форму реєстрації нового користувача
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input
          type="text"
          name="name"
          placeholder="Введіть ім'я"
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="Введіть адресу електронної пошти"
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Введіть пароль"
          required
        />
        <Button type="button" onClick={handleTogglePassword}>
          {showPassword ? 'Приховати пароль' : 'Показати пароль'}
        </Button>
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};