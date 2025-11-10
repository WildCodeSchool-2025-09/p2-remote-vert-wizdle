import { Link, Outlet } from "react-router";
import "./styles/App.css";

function App() {
	return (
		<>
			<header>
				<p>Je suis header</p>
			</header>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/rules">Rules</Link>
				<Link to="/game">Game</Link>
			</nav>
			<main>
				<Outlet />
			</main>
			<footer>
				<p>Je suis footer</p>
			</footer>
		</>
	);
}

export default App;
