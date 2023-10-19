// ContactForm
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Отримайте контакти через useSelector
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      setError('Both name and number are required.');
      return;
    }

    // Перевірте, чи контакт з таким ім'ям вже існує
    if (contacts.find((contact) => contact.name === name)) {
      setError('This name is already in contacts.');
      return;
    }

    // Використовуйте addContact для додавання контакту
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
    setSuccess('Contact added successfully.');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
      <label className={styles.ContactFormLabel}>
        Name
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          required
          className={styles.Input}
        />
      </label>
      <label className={styles.ContactFormLabel}>
        Phone
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          required
          className={styles.Input}
        />
      </label>

      <button type="submit" className={styles.AddContactBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
