import { useEffect, useState } from "react";

interface Character {
	id: number;
	nom: string;
	maison: string;
	image: string;
}

function Search() {
	const [query, setQuery] = useState("");
	const [data, setData] = useState<Character[]>([]);
	const [filtered, setFiltered] = useState<Character[]>([]);

	useEffect(() => {
		getCharacters();
	}, []);

	const getCharacters = () => {
		fetch("https://test-api-5zsf.onrender.com/harry_potter")
			.then((response) => response.json())
			.then((characters) => {
				setData(characters);
			})
			.catch((err) => console.error("Erreur :", err));
	};

	const changeSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);

		if (value.trim() === "") {
			setFiltered([]);
		} else {
			const normalize = (text: string) =>
				text
					.normalize("NFD")
					.replace(/\p{Diacritic}/gu, "")
					.toLowerCase();

			const results = data.filter((item) =>
				normalize(item.nom).includes(normalize(value)),
			);

			setFiltered(results);
		}
	};

	return (
		<div className="search-container">
			<input
				className="searchBar"
				type="text"
				value={query}
				onChange={changeSearchBar}
				placeholder="Rechercher un personnage"
			/>
			<ul className="results">
				{filtered.length > 0
					? filtered.map((item) => (
							<li key={item.id} className="character-item">
								<img
									src={item.image}
									alt={item.nom}
									className="character-img"
								/>
								<p>{item.nom}</p>
							</li> // chaque élément rendu a une clé
						)) // Si l'utilisateur a tapé quelque chose mais aucun match
					: query && <p>Aucun résultat 😢</p>}
			</ul>
		</div>
	);
}

export default Search;
