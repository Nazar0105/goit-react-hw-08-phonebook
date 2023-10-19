// api.js
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contacts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addContact = async (contact) => {
  try {
    const response = await axios.post(`${BASE_URL}/contacts`, contact);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async (contactId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async (token) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/logout`, null, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/current`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
