import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  contactListArray: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  searchText: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case "contactListArray/addContact":
      return (state = {
        ...state,
        contactListArray: [...state.contactListArray, action.payload],
      });

    case "contactListArray/deleteContact":
      return (state = {
        ...state,
        contactListArray: state.contactListArray.filter((contact) => contact.id !== action.payload),
      });

    case "searchText/changeSearchText":
      return (state = {
        ...state,
        searchText: action.payload,
      });

    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
