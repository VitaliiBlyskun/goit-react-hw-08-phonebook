import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from 'components/ContactsList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { Box } from '../components/Box';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError, selectContacts } from 'redux/contacts/selectors';
import { selectFilters } from 'redux/filter/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
        {isLoading && !error && <b>Request in progress...</b>}
      </Box>

      <Box mt={10} py={10} px={10} bg="primary">
        <h2>Contacts</h2>
        <Filter />
        
        {error && <p>Something goes wrong. {error}.</p>}
        {contacts.length > 0 && <ContactList />}

        {filter !== '' && contacts.length === 0 && (
          <p>This contact was not found</p>
        )}
      </Box>
    </Box>
  );
}
