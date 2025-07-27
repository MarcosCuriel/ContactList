import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar-dark-custom">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand-gradient">
          📒 Contact List
        </Link>

        <button
          className="navbar-toggler-custom d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
          <span className="toggler-icon"></span>
        </button>

        <div className="navbar-menu" id="navbarNav">
          <div className="navbar-actions">
            <Link to="/" className="nav-btn-outline">
              🏠 Home
            </Link>
            <Link
              to={"/form-contact"}
              className="nav-btn-primary"
              onClick={() => {
                dispatch({ type: "set_selected_contact", payload: null });
                navigate("/form");
              }}
            >
              ➕ Add Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
