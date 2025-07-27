export const Modal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Confirmation</h2>
        <div className="modal-content">
          <p>¿Are you sure to delete contact?</p>
        </div>
        <div className="modal-buttons">
          <button className="modal-btn modal-btn-confirm" onClick={onConfirm}>
            Confirm
          </button>
          <button className="modal-btn modal-btn-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
