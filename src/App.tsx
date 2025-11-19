import { Link, Outlet } from "react-router";
import "./styles/reset.css";
import "./styles/variable.css";
import "./styles/App.css";
import Header from "./components/Header";

function App() {
	return (
		<div className="background">
			<nav>
				<Link to="/">Home</Link>

				<Header />
			</nav>
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
