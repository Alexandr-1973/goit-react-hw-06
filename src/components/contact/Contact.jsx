import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import {useSelector, useDispatch} from "react-redux";
import css from "./Contact.module.css";

const Contact = ({ contactInfo }) => {
  const { id, name, number } = contactInfo;
  const dispatch=useDispatch();
  const contactListArray = useSelector((state) => state.contactListArray);
 

  function deleteContact(id) {
    console.log(contactListArray);
    const action = {
      type: "contactListArray/deleteContact",
      payload: id,
    }
    dispatch(action);
    console.log(contactListArray);
  }

  

  return (
    <div className={css.contact}>
      <ul className={css["contact-info"]}>
        <li>
          <p className={css.item}>
            <IoPerson className={css.icon} />
            {name}
          </p>
        </li>
        <li>
          <p className={css.item}>
            <FaPhoneAlt className={css.icon} />
            {number}
          </p>
        </li>
      </ul>
      <button className={css.btn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
