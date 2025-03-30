import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filterName = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div className={css.container}>
      <ul className={css.ul}>
        {filteredContacts.map((contact) => {
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
