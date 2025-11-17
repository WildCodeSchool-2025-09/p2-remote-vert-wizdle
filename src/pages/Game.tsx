import { useEffect, useState } from "react";
import Search from "../components/Search";
import VisualisationTable from "../components/VisualisationTable";
import "../styles/Search.css";
import type { Character } from "../interfaces/interfaces";

function Game() {
	const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
		null,
	);
	const [tableauTry, setTableauTry] = useState<Character[]>([]);
	const [victory, setVictory] = useState(false);
	const [dataApi, setDataApi] = useState<Character[]>([]);
	const [errorApi, setErrorApi] = useState<string | null>(null);

	useEffect(() => {
		fetch("https://test-api-5zsf.onrender.com/harry_potter")
			.then((response) => response.json())
			.then((characters) => {
				setDataApi(characters);
			})
			.catch(() => setErrorApi("Les personnages ont disparu 😲"));
	}, []);

	return (
		<>
			{!victory && (
				<Search
					setSelectedCharacter={setSelectedCharacter}
					setTableauTry={setTableauTry}
					errorApi={errorApi}
					dataApi={dataApi}
					setErrorApi={setErrorApi}
					tableauTry={tableauTry}
				/>
			)}
			<VisualisationTable
				selectedCharacter={selectedCharacter}
				tableauTry={tableauTry}
				setVictory={setVictory}
				dataApi={dataApi}
			/>

			{victory && <h1>Victoire !!!!!!!!</h1>}
		</>
	);
}
export default Game;
