import { useState } from "react";
import "../styles/clue.css";
import type { Character } from "../interfaces/interfaces";

interface ClueProps {
	attemptCount: number;
	todayCharacter: Character | undefined;
}

function Clue({ attemptCount, todayCharacter }: ClueProps) {
	const isDisabled = attemptCount < 5;
	const remainingAttempts = 5 - attemptCount;
	const [clueVisible, setClueVisible] = useState(false);

	function clueClick() {
		if (!isDisabled) {
			setClueVisible((prev) => !prev);
		}
	}
	return (
		<>
			<button type={"button"} onClick={clueClick} className="clue-button">
				<img
					src="./src/assets/images/boule-de-cristal.png"
					alt="Boule de cristal"
					className={isDisabled ? "boule-disabled" : "boule-enabled"}
				/>
				{isDisabled
					? `Indice dans ${remainingAttempts} essai${remainingAttempts > 1 ? "s" : ""}`
					: "Indice"}
			</button>
			{clueVisible && todayCharacter?.nom && (
				<div className="clue-container">
					Voici un indice pour vous aider : La première lettre du nom du
					personnage est "{todayCharacter.nom[0]}"
				</div>
			)}
		</>
	);
}

export default Clue;
