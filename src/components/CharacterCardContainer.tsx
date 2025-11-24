import { useState } from "react";
import "../styles/CharacterCardContainer.css";
import type { Character } from "../interfaces/interfaces";

interface CharacterCardContainerProps {
	todayCharacter: Character | undefined;
}

export default function CharacterCardContainer({
	todayCharacter,
}: CharacterCardContainerProps) {
	const [open, setOpen] = useState(false);

	return (
		<>
			{todayCharacter && (
				<div className="character-card-container">
					<div className="character-card-header">
						<h2>{todayCharacter.nom}</h2>
						<button
							type="button"
							className="character-card-button"
							onClick={() => setOpen(!open)}
						>
							{open ? "-" : "+"}
						</button>
					</div>
					{open && (
						<div className="character-card-body-container">
							<img src={todayCharacter.image} alt="characterToFind.nom" />
							<table>
								<tbody>
									<tr>
										<th scope="row" className="align-to-right ">
											espece :
										</th>
										<td>{todayCharacter.espece || "inconnue"}</td>
									</tr>
									<tr>
										<th scope="row" className="align-to-right ">
											Genre :
										</th>
										<td>{todayCharacter.genre || "inconnu"}</td>
									</tr>
									<tr>
										<th scope="row" className="align-to-right ">
											Maison :
										</th>
										<td>{todayCharacter.maison || "inconnue"}</td>
									</tr>
									<tr>
										<th scope="row" className="align-to-right ">
											Ascendance :
										</th>
										<td>{todayCharacter.ascendance || "inconnue"}</td>
									</tr>
									<tr>
										<th scope="row" className="align-to-right ">
											En vie :
										</th>
										<td>
											{todayCharacter.vivant === true
												? "oui"
												: todayCharacter.vivant === false
													? "non"
													: "non défini"}
										</td>
									</tr>
									<tr>
										<th scope="row" className="align-to-right ">
											Cheveux :
										</th>
										<td>{todayCharacter.couleur_cheveux || "inconnue"}</td>
									</tr>
								</tbody>
							</table>
						</div>
					)}
				</div>
			)}
		</>
	);
}
