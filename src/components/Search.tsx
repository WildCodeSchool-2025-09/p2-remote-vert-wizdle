import { useState } from "react";
import type { Character } from "../interfaces/interfaces";

interface SearchProps {
	setSelectedCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
	setTableauTry: React.Dispatch<React.SetStateAction<Character[]>>;
	errorApi: string | null;
	dataApi: Character[];
	setErrorApi: React.Dispatch<React.SetStateAction<string | null>>;
	tableauTry: Character[];
}

function Search({
	setSelectedCharacter,
	setTableauTry,
	errorApi,
	dataApi,
	setErrorApi,
	tableauTry,
}: SearchProps) {
	const [guess, setGuess] = useState("");
	const [listCharacter, setListCharacter] = useState<Character[]>([]);
	const [resultNotFound, setResultNotFound] = useState(false);
	const normalize = (text: string) =>
		text
			.normalize("NFD")
			.replace(/\p{Diacritic}/gu, "")
			.toLowerCase();
	const changeSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setGuess(value);
		setErrorApi(null);

		setResultNotFound(false);

		if (value.trim() === "") {
			setListCharacter([]);
		} else {
			const results = dataApi
				.filter((item) => normalize(item.nom).startsWith(normalize(value)))
				.filter((item) => !tableauTry.some((character) => character === item))
				.sort((a, b) => a.nom.localeCompare(b.nom));

			setListCharacter(results);

			if (results.length === 0) {
				setResultNotFound(true);
			}
		}
	};

	const selectCharacter = (character: Character) => {
		setSelectedCharacter(character);
		setGuess("");
		setListCharacter([]);
		setTableauTry((prev) => [character, ...prev]);
	};

	return (
		<div className="search-bar-container">
			<input
				className={`search-bar-input ${resultNotFound ? "input-error" : ""}`}
				type="text"
				value={guess}
				onChange={changeSearchBar}
				placeholder="Quel personnage suis-je ?"
			/>
			{errorApi && <p className="error-message">⚠️ {errorApi}</p>}
			<ul
				className={`results ${listCharacter.length > 0 ? "has-results" : ""}`}
			>
				{listCharacter.length > 0 ? (
					listCharacter.map((item: Character) => (
						<li key={item.id} className="character-item">
							<button
								type="button"
								className="character-button"
								onClick={() => selectCharacter(item)}
							>
								<img
									src={item.image}
									alt={item.nom}
									className="character-img"
								/>
								<p>{item.nom}</p>
							</button>
						</li>
					))
				) : guess !== "" ? (
					<li className="error-message">
						Pas très doué(e) en divination, hein ? 🔮
					</li>
				) : null}
			</ul>
		</div>
	);
}

export default Search;
