// contactsSlice.js
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
  updateContact,
} from './operations-contacts';

const getActions = (type) =>
  isAnyOf(fetchContacts[type], addContacts[type], deleteContacts[type], updateContact[type]);

const initialState = { items: [], isLoading: false, error: null };
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload.id);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.items.findIndex((contact) => contact.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addMatcher(getActions('pending'), (state) => {
        state.isLoading = true;
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(getActions('fulfilled'), (state) => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;