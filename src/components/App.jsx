import { Box } from './Box';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactsList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
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
        <ContactForm />
      </Box>

      <Box mt={10} py={10} px={10} bg="primary">
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
};
