import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';


const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      <div>
        {contact.name}: {contact.number}
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default ContactListItem;