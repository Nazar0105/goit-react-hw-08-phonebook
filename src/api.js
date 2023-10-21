// api.js
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/contacts`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addContact = async (token, contact) => {
  try {
    const response = await axios.post(`${BASE_URL}/contacts`, contact, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async (token, contactId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/contacts/${contactId}`, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateContact = async (token, contactId, updatedContact) => {
  try {
    const response = await axios.patch(`${BASE_URL}/contacts/${contactId}`, updatedContact, {
      headers: { Authorization: token },
    });
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

