import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts, getFilters } from 'redux/selectors';
import { DeleteContactButton } from 'components/DeleteContact/DeleteContact';
import { Initial, List } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <List>
      {visibleContacts.map(contact => (
        <Initial key={contact.id}>
          <p>{contact.name + ':' + contact.number}</p>
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