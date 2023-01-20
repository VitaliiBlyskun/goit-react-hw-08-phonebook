// import { Box } from './Box';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactsList/ContactList';
// import Filter from './Filter/Filter';

// export const App = () => {
//   return (
//     <Box
//       as="section"
//       maxWidth="600px"
//       width="80vw"
//       textAlign="center"
//       mx="auto"
//       mt={5}
//       pt={5}
//       bg="white"
//       borderRadius="normal"
//       boxShadow="normal"
//       overflow="hidden"
//     >
//       <Box>
//         <h1>Phonebook</h1>
//         <ContactForm />
//       </Box>

//       <Box mt={10} py={10} px={10} bg="primary">
//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//       </Box>
//     </Box>
//   );
// };


////////////////////////////////////////////////////////////////////////////////////////////

import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { Box } from './Box';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactsList/ContactList';
import Filter from './Filter/Filter';
import { selectError, selectIsLoading } from '../redux/selectors'



export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // const { items, isLoading, error } = useSelector(getContacts);


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
        <ContactList />
      </Box>
    </Box>
  );
};

