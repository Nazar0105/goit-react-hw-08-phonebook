// operations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const contacts = await api.fetchContacts();
  return contacts;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  const newContact = await api.addContact(contact);
  return newContact;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await api.deleteContact(contactId);
  return contactId;
});
