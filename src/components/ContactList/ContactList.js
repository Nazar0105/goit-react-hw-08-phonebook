// ContactList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import styles from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';

export const ContactList = () => {
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
      {filteredContacts.map((contact, index) => (
        <li key={contact.id} className={styles.item}>
          {contact.name}
          <ContactListItem contact={contact} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
