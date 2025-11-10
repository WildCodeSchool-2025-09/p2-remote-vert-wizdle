import { Link, Outlet } from "react-router";
import "./styles/reset.css";
import "./styles/variable.css";
import "./styles/App.css";

function App() {
	return (
		<>
			<header />
			<nav>
				<Link to="/">Home</Link>
				<Link to="/rules">Rules</Link>
				<Link to="/game">Game</Link>
			</nav>
			<main>
				<Outlet />
			</main>
			<footer />
		</>
	);
}

export default App;
