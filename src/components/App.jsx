import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Box } from './Box';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactsList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
    const [filter, setFilter] = useState('');

    
    const addContact = ({ name, number }) => {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevState => [...prevState, contact]);
    };
    
  const changeFilter = event => {
    setFilter(event.currentTarget.value );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  const deleteItem = itemId => {
    setContacts(contacts.filter(item => item.id !== itemId));
  };


  return (
    <Box
      as="section"
      maxWidth="600px"
      width="80vw"
      textAlign="center"
      mx="auto"
      mt={5}
      pt={5}
      bg="white"
      borderRadius="normal"
      boxShadow="normal"
      overflow="hidden"
    >
      <Box>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </Box>

      <Box mt={10} py={10} px={10} bg="primary">
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getVisibleContacts}
          onDelete={deleteItem}
          list={getVisibleContacts()}
        />
      </Box>
    </Box>
  );
};

