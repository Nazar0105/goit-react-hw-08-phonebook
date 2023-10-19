// ContactListItem.js
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactListItem = ({ contact, index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      {index + 1}. {contact.name}: {contact.number}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ContactListItem;
