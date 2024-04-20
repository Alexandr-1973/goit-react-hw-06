import {useSelector} from "react-redux";


import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  // const dispatch=useDispatch();
  const contactListArray = useSelector((state) => state.contactListArray);
  const searchText = useSelector((state) => state.searchText);

  // function deleteContact(id) {
  //   // setContactListArray(
  //   //   contactListArray.filter((contact) => contact.id !== id)
  //   // );
  //   const action = {
  //     type: "contactListArray/deleteContact",
  //     payload: contactListArray.filter((contact) => contact.id !== id),
  //   }
  //   dispatch(action);
  // }

//   console.log(contactListArray);
//   console.log(searchText);
//   const visibleContactList =  const { id, name, number } = contactInfo;;
  
//   });


const visibleContactList = contactListArray.filter((contact) =>
contact.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
);

  return (
    <ul className={css["contact-list"]}>
      {visibleContactList.map((contactInfo) => {
        return (
          <li key={contactInfo.id}>
            <Contact
              contactInfo={contactInfo}
              // onDeleteContact={deleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
