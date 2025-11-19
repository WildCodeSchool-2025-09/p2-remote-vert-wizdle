import Search from "../components/Search";
import "../styles/Search.css";
import { useState } from "react";
import Clue from "../components/clue";
import type { Character } from "../interfaces/interfaces";

function Game() {
	const [attemptCount, setAttemptCount] = useState(0);
	const [clueCharactere, setClueCharactere] = useState<Character | null>(null);

	function incrementAttempt() {
		setAttemptCount((prev) => prev + 1);
	}

	return (
		<>
			<Clue attemptCount={attemptCount} charactere={clueCharactere} />
			<Search
				onAttempt={incrementAttempt}
				setClueCharacter={setClueCharactere}
			/>
		</>
	);
}
export default Game;
