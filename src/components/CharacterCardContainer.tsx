import { useState } from "react";
import "../styles/CharacterCardContainer.css";

interface Character {
	nom: string;
	espece: string;
	genre: string;
	maison: string;
	ascendance: string;
	vivant: boolean;
	couleur_cheveux: string;
	image: string;
}

const fakeCharacter: Character = {
	nom: "Harry Potter",
	espece: "humain",
	genre: "masculin",
	maison: "Gryffondor",
	ascendance: "sang-mêlé",
	vivant: true,
	couleur_cheveux: "noir",
	image: "https://ik.imagekit.io/hpapi/harry.jpg",
};

function CharacterCardBody({
	characterToFind,
}: { characterToFind: Character }) {
	return (
		<div className="character-card-body-container">
			<img src={fakeCharacter.image} alt="characterToFind.nom" />
			<table>
				<tbody>
					<tr>
						<th scope="row" className="align-to-right ">
							espece :
						</th>
						<td>{characterToFind.espece || "inconnue"}</td>
					</tr>
					<tr>
						<th scope="row" className="align-to-right ">
							Genre :
						</th>
						<td>{characterToFind.genre || "inconnu"}</td>
					</tr>
					<tr>
						<th scope="row" className="align-to-right ">
							Maison :
						</th>
						<td>{characterToFind.maison || "inconnue"}</td>
					</tr>
					<tr>
						<th scope="row" className="align-to-right ">
							Ascendance :
						</th>
						<td>{characterToFind.ascendance || "inconnue"}</td>
					</tr>
					<tr>
						<th scope="row" className="align-to-right ">
							En vie :
						</th>
						<td>
							{characterToFind.vivant === true
								? "oui"
								: characterToFind.vivant === false
									? "non"
									: "non défini"}
						</td>
					</tr>
					<tr>
						<th scope="row" className="align-to-right ">
							Cheveux :
						</th>
						<td>{characterToFind.couleur_cheveux || "inconnue"}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default function CharacterCardContainer() {
	const [open, setOpen] = useState(false);

	return (
		<div className="character-card-container">
			<div className="character-card-header">
				<h2>{fakeCharacter.nom}</h2>
				<button
					type="button"
					className="character-card-button"
					onClick={() => setOpen(!open)}
				>
					{open ? "-" : "+"}
				</button>
			</div>
			{open && <CharacterCardBody characterToFind={fakeCharacter} />}
		</div>
	);
}
