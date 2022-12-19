import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import useLocaleStorage from 'components/hooks/useLocalStorage';
import { Button, Form, Label, Input } from './ContactForm.styled';

const ContactForm = ( {onSubmit} ) => {
  const [ name, setName ] = useLocaleStorage('name', '')
  const [ number, setNumber ] = useLocaleStorage('number', '')

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name){
      case 'name':
        setName(value)
        break;

      case 'number':
        setNumber(value);
          break;

          default: return;
    };
  };
 
const handleSubmit = event => {
  event.preventDefault();
    onSubmit({name, number});
  reset();
};
  

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nameInputId}
          required
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={numberInputId}
          required
        />
      </Label>
      <Button type="submit" disabled={!name && !number}>
        Add contact
      </Button>
    </Form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};