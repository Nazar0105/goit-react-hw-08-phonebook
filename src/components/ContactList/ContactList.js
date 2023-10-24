import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ filter }) => {
  const contacts = useSelector(selectContacts);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const contactsToDisplay = filter ? filteredContacts : contacts;

  return (
    <div>
      {contactsToDisplay.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
