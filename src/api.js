// api.js
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'; // Замініть на URL вашого бекенду

export const apiFetchContacts = () => {
  return axios.get('/contacts');
};

export const apiAddContact = (name, number) => {
  return axios.post('/contacts', { name, number });
};

export const apiDeleteContact = (contactId) => {
  return axios.delete(`/contacts/${contactId}`);
};

export const apiUpdateContact = (contactId, { name, number }) => {
  return axios.patch(`/contacts/${contactId}`, { name, number });
};
