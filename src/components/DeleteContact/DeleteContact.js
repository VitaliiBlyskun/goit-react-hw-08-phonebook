import { useDispatch } from "react-redux";
import { Button } from "./DeleteContact.styled";
import { deleteContact } from "redux/contacts/operations"

export const DeleteContactButton = ({ contact }) => {

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id))

  return (
     <Button type="button" onClick={handleDelete}>
        Delete
     </Button>
  );
};