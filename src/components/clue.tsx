import { useState } from "react";
import "../styles/clue.css";
import type { Character } from "../interfaces/interfaces";

interface ClueProps {
	attemptCount: number;
	charactere: Character | null;
}

function Clue({ attemptCount, charactere }: ClueProps) {
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
			<button type={"button"} onClick={clueClick}>
				<img
					src="./src/assets/images/boule-de-cristal.png"
					alt="Boule de cristal"
					className={isDisabled ? "boule-disabled" : "boule-enabled"}
				/>
				{isDisabled
					? `(${remainingAttempts} tentatives restantes avant indice)`
					: "Indice"}
			</button>
			{clueVisible && charactere?.nom && (
				<div className="clue-container">
					Voici un indice pour vous aider : La première lettre du nom du
					personnage est "{charactere.nom[0]}"
				</div>
			)}
		</>
	);
}

export default Clue;
