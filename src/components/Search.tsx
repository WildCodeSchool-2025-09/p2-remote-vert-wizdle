import { useEffect, useState } from "react";

interface Character {
	id: number;
	nom: string;
	maison: string;
	image: string;
	espece: string;
	genre: string;
	ascendance: string;
	couleur_cheveux: string;
	vivant: boolean;
}

function Search() {
	const [query, setQuery] = useState("");
	const [data, setData] = useState<Character[]>([]);
	const [filtered, setFiltered] = useState<Character[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [searchError, setSearchError] = useState(false);
	const [selected, setSelected] = useState<Character | null>(null);

	useEffect(() => {
		fetch("https://test-api-5zsf.onrender.com/harry_potter")
			.then((response) => response.json())
			.then((characters) => {
				setData(characters);
			})
			.catch(() => setError("Les personnages ont disparu 😲"));
	}, []);

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

			{selected && (
				<div className="character-details">
					<p>{selected.nom}</p>
					<p>Espece :{selected.espece || "Inconnue"}</p>
					<p>Genre : {selected.genre || "Inconnue"}</p>
					<p>Ascendance : {selected.ascendance || "Inconnue"}</p>
					<p>Maison : {selected.maison || "Inconnue"}</p>
					<p>En vie ? : {selected.vivant || "Inconnue"}</p>
					<p>Cheveux : {selected.couleur_cheveux || "Inconnue"}</p>
				</div>
			)}
		</div>
	);
}

export default Search;
