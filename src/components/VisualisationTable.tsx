import { useEffect, useState } from "react";
import "../styles/VisualisationTable.css";
import calendarData from "../data/calendar.json";

interface Personnage {
	id: string;
	nom: string;
	espece: string;
	genre: string;
	ascendance: string;
	maison: string;
	vivant: boolean;
	couleur_cheveux: string;
}

function VisualisationTable() {
	const apiUrl = import.meta.env.VITE_API_URL;
	const [allData, setAllData] = useState<Personnage[]>([]);
	const [tableauTry, setTableauTry] = useState<Personnage[]>([]);
	const today = new Date().toISOString().split("T")[0];
	const calendar: Record<string, string> = calendarData;
	const todayId = calendar[today];
	const todayPerso = allData.find((personnage) => personnage.id === todayId);

	useEffect(() => {
		fetch(apiUrl)
			.then((res) => res.json())
			.then((data) => {
				setAllData(data);
			});
	}, []);

	if (allData.length === 0) {
		return <p>Chargement des données...</p>;
	}

	function pushRandom() {
		if (allData.length === 0) return;
		const random = allData[Math.floor(Math.random() * allData.length)];
		setTableauTry((prev) => [random, ...prev]);
	}

	return (
		<>
			<button type="button" onClick={pushRandom}>
				Ajoute un perso aléatoire
			</button>
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
							tableauTry.map((personnage) => (
								<tr key={personnage.id}>
									<td
										className={
											todayPerso?.nom === personnage?.nom
												? "box-true"
												: "box-false"
										}
									>
										<div className="cell">{personnage?.nom}</div>
									</td>
									<td
										className={
											todayPerso?.espece === personnage?.espece
												? "box-true"
												: "box-false"
										}
									>
										{personnage?.espece}
									</td>
									<td
										className={
											todayPerso?.genre === personnage?.genre
												? "box-true"
												: "box-false"
										}
									>
										{personnage?.genre === "" ? "Inconnu" : personnage.genre}
									</td>
									<td
										className={
											todayPerso?.ascendance === personnage?.ascendance
												? "box-true"
												: "box-false"
										}
									>
										{personnage?.ascendance === ""
											? "Inconnu"
											: personnage.ascendance}
									</td>
									<td
										className={
											todayPerso?.maison === personnage?.maison
												? "box-true"
												: "box-false"
										}
									>
										{personnage?.maison === "" ? "Inconnu" : personnage.maison}
									</td>
									<td
										className={
											todayPerso?.vivant === personnage?.vivant
												? "box-true"
												: "box-false"
										}
									>
										{personnage?.vivant ? "oui" : "non"}
									</td>
									<td
										className={
											todayPerso?.couleur_cheveux ===
											personnage?.couleur_cheveux
												? "box-true"
												: "box-false"
										}
									>
										{personnage?.couleur_cheveux === ""
											? "Inconnu"
											: personnage.couleur_cheveux}
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
