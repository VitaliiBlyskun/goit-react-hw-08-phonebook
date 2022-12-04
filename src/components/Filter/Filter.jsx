import PropTypes from 'prop-types';
import { Label } from "./Filter.styled";

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Finds contacts by name
      <br/>
      <br/>
      <input type="text" value={value} onChange={onChange} />
    </Label>
  )
};

export default Filter;

Filter.propTypes = {
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
};