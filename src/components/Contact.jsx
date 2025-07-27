import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { deleteContact } from "../api/contactApi";
import { Modal } from "./Modal";
import { useNavigate } from "react-router-dom";

export const Contact = ({ contact }) => {
  const { dispatch } = useGlobalReducer();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openDeleteModal = () => setIsModalOpen(true);

  const closeDeleteModal = () => setIsModalOpen(false);

  const handleDeleteConfirm = async () => {
    await deleteContact(contact.id, dispatch);
    closeDeleteModal();
  };

  const handleEdit = () => {
    dispatch({ type: "set_selected_contact", payload: contact });
    navigate("/form-contact");
  };

  return (
    <>
      <article className="contact-item-extended mt-4">
        <div className="contact-avatar-gradient">
          {contact.name ? contact.name.charAt(0).toUpperCase() : "C"}
        </div>

        <header className="contact-info-extended">
          <h3 className="contact-name-gradient">➤ {contact.name}</h3>
          <div className="contact-details">
            <span className="contact-detail-item">📍 {contact.address}</span>
            <span className="contact-detail-item">📞 {contact.phone}</span>
            <span className="contact-detail-item">📧 {contact.email}</span>
          </div>
        </header>

        <aside className="contact-actions-extended">
          <button
            className="action-btn-gradient edit-gradient"
            onClick={handleEdit}
          >
            <span className="btn-icon">📝</span>
            <span className="btn-text">Edit</span>
          </button>

          <button
            className="action-btn-gradient delete-gradient"
            onClick={openDeleteModal}
          >
            <span className="btn-icon">🗑️</span>
            <span className="btn-text">Delete</span>
          </button>
        </aside>
      </article>

      <Modal
        isOpen={isModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
};
