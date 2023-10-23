import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import UserMenu from '../components/UserMenu/UserMenu';
import { fetchContacts, addContact, deleteContact, updateContact } from '../api'; // Імпорт функцій для роботи з API

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token'); // Отримайте токен з локального сховища
        const contactsData = await fetchContacts(token); // Передайте токен до функції
        setContacts(contactsData);
      } catch (error) {
        console.error('Помилка завантаження контактів з сервера:', error);
      }
    };

    fetchData();
  }, []);

  const addNewContact = async (newContact) => {
    try {
      const response = await addContact(newContact); // Передаємо токен через функцію
      setContacts([...contacts, response]);
    } catch (error) {
      console.error('Помилка при додаванні контакту:', error);
    }
  };

  const deleteContactData = async (contactId) => {
    try {
      await deleteContact(contactId); // Передаємо токен через функцію
      setContacts(contacts.filter((contact) => contact.id !== contactId));
    } catch (error) {
      console.error('Помилка при видаленні контакту:', error);
    }
  };

  const updateContactData = async (updatedContact) => {
    try {
      const response = await updateContact(updatedContact); // Передаємо токен через функцію
      setContacts(
        contacts.map((contact) => (contact.id === response.id ? response : contact))
      );
    } catch (error) {
      console.error('Помилка при оновленні контакту:', error);
    }
  };

  return (
    <div>
      <UserMenu />
      <h2>Contacts</h2>
      <ContactForm onAddContact={addNewContact} selectedContact={selectedContact} onUpdateContact={updateContactData} />
      <ContactList contacts={contacts} onDeleteContact={deleteContactData} onEditContact={setSelectedContact} />
    </div>
  );
};

export default Contacts;
