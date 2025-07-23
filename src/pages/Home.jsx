import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Contact } from "../components/Contact.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<>
			<h1>Welcome to your Agenda</h1>
			<button>Go to demo</button>
			<Contact name={"Manolo Suarez"} img={"src/assets/img/ContactPhoto.webp"} location={"madrid"} email={"m.@html.com"} phone={654654654} />
		</>
	);
}; 