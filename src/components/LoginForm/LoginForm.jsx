// LoginForm
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './LoginForm.styled';

// Компонент LoginForm відповідає за форму авторизації користувача
export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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
      <Button type="submit">Log In</Button>
    </Form>
  );
};
