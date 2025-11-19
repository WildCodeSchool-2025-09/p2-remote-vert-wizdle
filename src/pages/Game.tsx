import Search from "../components/Search";
import "../styles/Search.css";
import { useState } from "react";
import Clue from "../components/clue";

function Game() {
	const [attemptCount, setAttemptCount] = useState(0);

	function incrementAttempt() {
		setAttemptCount((prev) => prev + 1);
	}

	return (
		<>
			<Clue attemptCount={attemptCount} />
			<Search onAttempt={incrementAttempt} />
		</>
	);
}
export default Game;
