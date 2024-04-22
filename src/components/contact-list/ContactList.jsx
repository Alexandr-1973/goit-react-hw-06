import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const visibleContactList = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(nameFilter.toLowerCase().trim())
  );

  return (
    <ul className={css["contact-list"]}>
      {visibleContactList.map((contactInfo) => {
        return (
          <li key={contactInfo.id}>
            <Contact contactInfo={contactInfo} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
