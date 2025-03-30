import css from "./Contact.module.css";
import { ImUser } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  function handleDelete() {
     dispatch(deleteContact(contact.id))
    };

  return (
    <div className={css.container}>
      <div className={css.text}>
        <p className={css.p}>
          <ImUser /> {contact.name}
        </p>
        <p className={css.p}>
          <ImPhone /> {contact.number}
        </p>
      </div>

      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
