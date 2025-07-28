import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { postContact, changeContact } from "../api/contactApi";
import { useNavigate } from "react-router-dom";

export const FormContact = () => {
  const { store, dispatch } = useGlobalReducer();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const navigate = useNavigate();

  const selected = store.selectedContact;

  useEffect(() => {
    if (selected) {
      setFormData({
        name: selected.name || "",
        address: selected.address || "",
        phone: selected.phone || "",
        email: selected.email || "",
      });
    } else {
      setFormData({
        name: "",
        address: "",
        phone: "",
        email: "",
      });
    }
  }, [selected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactToSend = {
      name: formData.name,
      address: formData.address,
      phone: formData.phone,
      email: formData.email,
      agenda_slug: "marcos",
    };

    if (selected) {
      await changeContact(selected.id, contactToSend, dispatch);
    } else {
      await postContact(contactToSend, dispatch);
    }
    dispatch({ type: "set_selected_contact", payload: null });
    navigate("/contact-list");
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <h1 className="form-title">Contact</h1>

        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            {selected ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};
