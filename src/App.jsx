import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/contact-form/ContactForm.jsx";
import SearchBox from "./components/search-box/SearchBox.jsx";
import ContactList from "./components/contact-list/ContactList.jsx";
import { nanoid } from "nanoid";
// import { useSelector } from "react-redux";
// import { state } from "./redux/store.js";

function App() {
  const dispatch = useDispatch();
  // const contactListArray = useSelector((state) => state.contactListArray);
  // const searchText = useSelector((state) => state.searchText);

  // const [contactListArray, setContactListArray] = useState(() => {
  //   const contactsFromLS = JSON.parse(localStorage.getItem("contactsLsKey"));
  //   if (contactsFromLS) {
  //     return contactsFromLS;
  //   } else {
  //     return [
  //       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //     ];
  //   }
  // });

  // const [searchText, setSearchText] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("contactsLsKey", JSON.stringify(contactListArray));
  // }, [contactListArray]);

  function addContact(values) {
    const id = nanoid();
    // const newContact = { ...values, id };
    // setContactListArray([...contactListArray, newContact]);

    const action = {
      type: "contactListArray/addContact",
      payload: { ...values, id },
    };

    dispatch(action);
  }

  // function deleteContact(id) {
  //   // setContactListArray(
  //   //   contactListArray.filter((contact) => contact.id !== id)
  //   // );
  //   const action = {
  //     type: "contactListArray/deleteContact",
  //     payload: contactListArray.filter((contact) => contact.id !== id),
  //   }
  // }

  // const visibleContactList = contactListArray.filter((contact) =>
  //   contact.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
  // );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox />
      <ContactList
        // visibleContactList={visibleContactList}
        // deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
