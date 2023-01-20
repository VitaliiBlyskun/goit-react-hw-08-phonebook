import { useDispatch  } from "react-redux";
import { useSelector } from "react-redux";
import { contactFilter } from "../../redux/filtersSlice";
import { selectFilters } from "../../redux/selectors"
import { Label } from "./Filter.styled";

const Filter = () => {
  
 const value = useSelector(selectFilters);

  const dispatch = useDispatch();

  const handleChange = event => {
      dispatch(contactFilter(event.currentTarget.value));
  };

  return (
    <Label>
      Finds contacts by name 
      <br/>
      <br/>
      <input type="text" onChange={handleChange} value={value}/>
    </Label>
  )
};

export default Filter;