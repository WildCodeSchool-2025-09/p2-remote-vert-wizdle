import { useEffect } from "react";
import "../styles/VisualisationTable.css";
import calendarData from "../data/calendar.json";
import type {
	Character,
	VisualisationTableProps,
} from "../interfaces/interfaces";

function VisualisationTable({
	selected,
	tableauTry,
	setVictory,
	data,
}: VisualisationTableProps) {
	const today = new Date().toISOString().split("T")[0];
	const calendar: Record<string, string> = calendarData;
	const todayId = calendar[today];
	const todayCharacter = data.find((character) => character.id === todayId);

	// biome-ignore lint: react-hooks/exhaustive-deps
	useEffect(() => {
		if (!selected || !data) return;
		if (selected.id === todayCharacter?.id) {
			setVictory(true);
		}
	}, [selected, data]);

	if (data.length === 0) {
		return <p>Chargement des données...</p>;
	}

	return (
		<>
			<div className="table-container">
				<table id="table-game">
					<thead>
						<tr>
							<th>Nom</th>
							<th>Espèce</th>
							<th>Genre</th>
							<th>Ascendance</th>
							<th>Maison</th>
							<th>En vie?</th>
							<th>Cheveux</th>
						</tr>
					</thead>
					<tbody>
						{tableauTry.length > 0 &&
							tableauTry.map((character: Character) => (
								<tr key={character.id}>
									<td>
										{todayCharacter?.nom === character?.nom ? (
											<img
												src="./src/assets/images/rond-vert.png"
												alt="rond valide"
											/>
										) : (
											<img
												src="./src/assets/images/rond-rouge.png"
												alt="rond invalide"
											/>
										)}
										<div className="cell">{character?.nom}</div>
									</td>
									<td
										className={
											todayCharacter?.espece === character?.espece
												? "box-true"
												: "box-false"
										}
									>
										{character?.espece}
									</td>
									<td
										className={
											todayCharacter?.genre === character?.genre
												? "box-true"
												: "box-false"
										}
									>
										{character?.genre === "" ? "Inconnu" : character.genre}
									</td>
									<td
										className={
											todayCharacter?.ascendance === character?.ascendance
												? "box-true"
												: "box-false"
										}
									>
										{character?.ascendance === ""
											? "Inconnu"
											: character.ascendance}
									</td>
									<td
										className={
											todayCharacter?.maison === character?.maison
												? "box-true"
												: "box-false"
										}
									>
										{character?.maison === "" ? "Inconnu" : character.maison}
									</td>
									<td
										className={
											todayCharacter?.vivant === character?.vivant
												? "box-true"
												: "box-false"
										}
									>
										{character?.vivant ? "oui" : "non"}
									</td>
									<td
										className={
											todayCharacter?.couleur_cheveux ===
											character?.couleur_cheveux
												? "box-true"
												: "box-false"
										}
									>
										{character?.couleur_cheveux === ""
											? "Inconnu"
											: character.couleur_cheveux}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</>
	);
}
export default VisualisationTable;
