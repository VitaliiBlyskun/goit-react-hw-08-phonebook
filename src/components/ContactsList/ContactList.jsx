import { DeleteContactButton } from 'components/DeleteContact/DeleteContact';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilters } from 'redux/filter/selectors';
import { Initial, List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredString = useSelector(selectFilters);

  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filteredString.toLowerCase());
  });

  return (
    <List>
      {visibleContacts.map(contact => (
        <Initial key={contact.id}>
          <p>{contact.name + ' : ' + contact.number}</p>
          <DeleteContactButton contact={contact} />
        </Initial>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};




