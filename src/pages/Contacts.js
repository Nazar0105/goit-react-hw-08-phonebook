import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList'; // Імпортуємо компонент ContactList
import UserMenu from '../components/UserMenu/UserMenu';
import Filter from '../components/Filter/Filter';
import { fetchContacts, addContact, deleteContact, updateContact } from '../api';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const contactsData = await fetchContacts(token);
        setContacts(contactsData);
      } catch (error) {
        console.error('Помилка завантаження контактів з сервера:', error);
      }
    };

    fetchData();
  }, []);

  const addNewContact = async (newContact) => {
    try {
      const response = await addContact(newContact);
      setContacts([...contacts, response]);
    } catch (error) {
      console.error('Помилка при додаванні контакту:', error);
    }
  };

  const deleteContactData = async (contactId) => {
    try {
      await deleteContact(contactId);
      setContacts(contacts.filter((contact) => contact.id !== contactId));
    } catch (error) {
      console.error('Помилка при видаленні контакту:', error);
    }
  };

  const updateContactData = async (updatedContact) => {
    try {
      const response = await updateContact(updatedContact);
      setContacts(
        contacts.map((contact) => (contact.id === response.id ? response : contact))
      );
    } catch (error) {
      console.error('Помилка при оновленні контакту:', error);
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <UserMenu />
      <h2>Contacts</h2>
      <ContactForm onAddContact={addNewContact} selectedContact={selectedContact} onUpdateContact={updateContactData} />
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContactData} onEditContact={setSelectedContact} />
    </div>
  );
};

export default Contacts;
