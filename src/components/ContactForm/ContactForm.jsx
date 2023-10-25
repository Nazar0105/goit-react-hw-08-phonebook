// ContactForm
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/operations-contacts';
import { selectContacts } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { ReactComponent as AddIcon } from 'icons/add.svg';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${name} вже в контактах☝️`);
      return;
    }

    dispatch(addContacts({ name, number }));

    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            required
          />
        </Label>

        <Label>
          Number
          <Input
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            required
          />
        </Label>

        <Button type="submit">
          <AddIcon fill="#f08080" width="25" height="25" />
          Add contact
        </Button>
      </Form>
      <Filter />
    </>
  );
};
