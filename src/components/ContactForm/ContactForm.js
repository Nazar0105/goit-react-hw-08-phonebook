import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contact = { name, number };
      const token = 'your_token_here';

      const response = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        contact,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        console.log('Contact added:', response.data);
        setName('');
        setNumber('');
        setSuccess('Contact added successfully.');
      } else {
        setError('Failed to add contact.');
      }
    } catch (error) {
      setError('Failed to add contact.');
    }
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
