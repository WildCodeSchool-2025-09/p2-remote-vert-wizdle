import { useState } from "react";
import Score from "../components/Score";

function Game() {
	const [time, setTime] = useState(0);
	const [indice, setIndice] = useState(0);
	const [tentative, setTentative] = useState(0);
	const [nomPersonnage, setNomPersonnage] = useState("Toto");
	const [scoreView, setScoreView] = useState(true);

	return (
		<>
			{scoreView && (
				<div className="overlay">
					<Score
						time={time}
						indice={indice}
						tentative={tentative}
						nomPersonnage={nomPersonnage}
						setScoreView={setScoreView}
					/>
				</div>
			)}
		</>
	);
}
export default Game;
