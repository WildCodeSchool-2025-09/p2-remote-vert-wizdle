import { useEffect, useState } from "react";
import Search from "../components/Search";
import VisualisationTable from "../components/VisualisationTable";
import "../styles/Search.css";

interface Character {
	id: string;
	nom: string;
	maison: string;
	image: string;
	espece: string;
	genre: string;
	ascendance: string;
	couleur_cheveux: string;
	vivant: boolean;
}

function Game() {
	const [selected, setSelected] = useState<Character | null>(null);
	const [tableauTry, setTableauTry] = useState<Character[]>([]);
	const [victory, setVictory] = useState(false);
	const [data, setData] = useState<Character[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("https://test-api-5zsf.onrender.com/harry_potter")
			.then((response) => response.json())
			.then((characters) => {
				setData(characters);
			})
			.catch(() => setError("Les personnages ont disparu 😲"));
	}, []);

	return (
		<>
			{!victory && (
				<Search
					setSelected={setSelected}
					setTableauTry={setTableauTry}
					error={error}
					data={data}
					setError={setError}
					selected={selected}
				/>
			)}
			<VisualisationTable
				selected={selected}
				tableauTry={tableauTry}
				setVictory={setVictory}
				data={data}
			/>

			{victory && <h1>Victoire !!!!!!!!</h1>}
		</>
	);
}
export default Game;
