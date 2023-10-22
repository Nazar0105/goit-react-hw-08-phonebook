// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from '../../redux/contactsSlice';
// import { selectUser } from '../../redux/userSlice';
// import styles from './AddContact.module.css';

// const AddContact = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);
//   const [contact, setContact] = useState({ name: '', number: '' });
//   const [showForm, setShowForm] = useState(false); // Доданий стан для відстеження відображення форми

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setContact((prevContact) => ({ ...prevContact, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (contact.name && contact.number) {
//       dispatch(addContact({ ...contact, token: user.token }));
//       setContact({ name: '', number: '' });
//       // Після додавання контакту сховати форму
//       setShowForm(false);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2>Add Contact</h2>
//       {showForm ? ( // Відображати форму, якщо showForm === true
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={contact.name}
//               onChange={handleInputChange}
//             />
//           </label>
//           <label>
//             Number:
//             <input
//               type="text"
//               name="number"
//               value={contact.number}
//               onChange={handleInputChange}
//             />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       ) : (
//         // Відображати кнопку "Add Contacts", якщо showForm === false
//         <button onClick={() => setShowForm(true)}>Add Contacts</button>
//       )}
//     </div>
//   );
// };

// export default AddContact;
