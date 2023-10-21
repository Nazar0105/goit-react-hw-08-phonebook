// Contacts.js
import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import UserMenu from '../components/UserMenu/UserMenu';

const Contacts = () => {
  return (
    <div>
      <UserMenu />
      <h2>Contacts</h2>
      <ContactForm /> 
      <Filter /> 
      <ContactList /> 
      <ContactListItem />
    </div>
  );
};

export default Contacts;

