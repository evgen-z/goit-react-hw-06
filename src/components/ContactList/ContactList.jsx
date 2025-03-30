import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";


export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items)
  return (
    <div className={css.container}>
      <ul className={css.ul}>
        {contacts.map((contact) => {
          return (
            <li className={css.li} key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
