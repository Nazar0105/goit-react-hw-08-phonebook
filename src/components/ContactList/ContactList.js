import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContact = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = getFilteredContact();

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact, _index) => (
        <li key={contact.id} className={styles.item}>
          
        </li>
      ))}
    </ul>
  );
};

export default ContactList;


