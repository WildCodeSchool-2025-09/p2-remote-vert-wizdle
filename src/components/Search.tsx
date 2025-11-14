import { useState } from "react";
import type { Character, SearchProps } from "../interfaces/interfaces";

function Search({
	setSelected,
	setTableauTry,
	error,
	data,
	selected,
	setError,
}: SearchProps) {
	const [query, setQuery] = useState("");
	const [filtered, setFiltered] = useState<Character[]>([]);
	const [searchError, setSearchError] = useState(false);
	const normalize = (text: string) =>
		text
			.normalize("NFD")
			.replace(/\p{Diacritic}/gu, "")
			.toLowerCase();
	const changeSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);
		setError(null);

		setSearchError(false);

		if (value.trim() === "") {
			setFiltered([]);
		} else {
			const results = data
				.filter((item) => normalize(item.nom).startsWith(normalize(value)))
				.filter((item) => item.id !== selected?.id)
				.sort((a, b) => a.nom.localeCompare(b.nom));

			setFiltered(results);

			if (results.length === 0) {
				setSearchError(true);
			}
		}
	};

	const selectCharacter = (character: Character) => {
		setSelected(character);
		setQuery("");
		setFiltered([]);
		setTableauTry((prev) => [character, ...prev]);
	};

	return (
		<div className="search-bar-container">
			<input
				className={`search-bar-input ${searchError ? "input-error" : ""}`}
				type="text"
				value={query}
				onChange={changeSearchBar}
				placeholder="Quel personnage suis-je ?"
			/>
			{error && <p className="error-message">⚠️ {error}</p>}
			<ul className={`results ${filtered.length > 0 ? "has-results" : ""}`}>
				{filtered.length > 0 ? (
					filtered.map((item: Character) => (
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
				) : query !== "" ? (
					<li className="error-message">
						Pas très doué(e) en divination, hein ? 🔮
					</li>
				) : null}
			</ul>
		</div>
	);
}

export default Search;
