import { useEffect } from "react";
import { Contact } from "../components/Contact";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getAgendaContact } from "../api/contactApi";

export const ContactList = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    getAgendaContact(dispatch);
  }, []);

  return (
    <>
      {store.contacts.length > 0 ? (
        store.contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <p className="no-contacts-text">No contacts available</p>
      )}
    </>
  );
};
