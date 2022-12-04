import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Box } from './Box';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactsList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteItem = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== itemId),
    }));
  };

  componentDidMount () {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts =JSON.parse(contacts);

    if(parsedContacts) {
      this.setState({contacts: parsedContacts});
    }

  }

  componentDidUpdate(prevState) {
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }

  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

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
          <ContactForm onSubmit={this.addContact} />
        </Box>

        <Box mt={10} py={10} px={10} bg="primary">
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteItem}
            list={this.getVisibleContacts()}
          />
        </Box>
      </Box>
    );
  }
}

