// contactsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
      });
  },
});

export const selectContacts = (state) => state.contacts.contacts;

export default contactsSlice.reducer;
