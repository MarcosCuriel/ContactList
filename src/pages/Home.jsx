import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-simple">
      <div className="welcome-content">
        <h1 className="welcome-title">
          Welcome to your <span className="title-accent">Agenda</span>
        </h1>

        <Link to="/contact-list" className="home-link">
          📋 Contact List
        </Link>
      </div>
    </div>
  );
};
