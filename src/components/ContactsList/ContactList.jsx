import PropTypes from 'prop-types';
import { Button, ContactContainer, Initial, List } from './ContactList.styled';

const ContactList = ({ list, onDelete }) => {
  return (
  <ContactContainer>
    <List>
        {list.map(item => <Initial key={item.id}>
            <p>{item.name + ":"}</p>
            <p>{item.number}</p>
            <Button
              type="button"
              onClick={() => {
                onDelete(item.id);
              }}
            >
              Delete
            </Button>
        </Initial>)}
    </List>
  </ContactContainer>
  );
};

export default ContactList


ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};