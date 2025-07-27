export const initialStore = () => {
  return {
    contacts: [],
    selectedContact: null,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "get_contacts":
      return { ...store, contacts: action.payload };

    case "post_contacts":
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
      };

    case "delete_contact":
      return {
        ...store,
        contacts: store.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case "put_contact":
      return {
        ...store,
        contacts: store.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    case "set_selected_contact":
      return {
        ...store,
        selectedContact: action.payload,
      };

    default:
      return store;
  }
}
