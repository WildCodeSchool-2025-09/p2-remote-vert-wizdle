import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../styles/Rules.css";

const fullText = `🪄 WIZDLE est un jeu de déduction dans l’univers d’Harry Potter.

Chaque jour, un personnage mystère est tiré au sort. Votre but : le deviner en un minimum d’essais et de temps.

Sélectionnez un personnage via la barre de recherche pour valider une tentative.
Un tableau indique, pour chaque caractéristique (espèce, genre, sang, maison, statut de vie, cheveux) si elle est :

🟩 Correcte
🟥 Incorrecte

Utilisez ces retours pour affiner votre choix.

Après plusieurs essais, un bouton Indice apparaît : il révèle la première lettre du prénom (mais réduit le score).

Votre score final dépend des tentatives, du temps et de l’usage de l’indice.`;

function Rules() {
	const [showParchment, setShowParchment] = useState(false);
	const [answerOath, setAnswerOath] = useState("");
	const [errorOath, setErrorOath] = useState("");
	const [validOath, setValidOath] = useState(false);
	const [gameButton, setGameButton] = useState(false);
	const [showClue, setShowClue] = useState(false);
	const navigate = useNavigate();
	const requiredOath =
		"je jure solennellement que mes intentions sont mauvaises";

	useEffect(() => {
		setTimeout(() => setShowParchment(true), 1200);
	}, []);

	const normalize = useCallback((text: string) => {
		return text
			.normalize("NFD")
			.replace(/\p{Diacritic}/gu, "")
			.replace(/[.,!?;:'"]/g, "")
			.toLowerCase();
	}, []);

	const oathValidate = () => {
		if (normalize(answerOath) === normalize(requiredOath)) {
			setValidOath(true);
			setErrorOath("");
		} else {
			setValidOath(false);
			setAnswerOath("");
			setErrorOath(
				"Pense à regarder de nouveau Harry Potter ... Un indice t'attend juste en dessous",
			);
		}
	};

	const handleShowClue = () => {
		setShowClue(true);
	};

	useEffect(() => {
		if (validOath) {
			setGameButton(true);
		}
	}, [validOath]);

	return (
		<div className="marauder-open-container">
			<section className="marauder-open-map">
				<img
					src="/images/marauder-map-gauche.jpg"
					alt="cote gauche de la carte"
					className="map-left-half"
				/>
				<img
					src="/images/marauder-map-droite.jpg"
					alt="cote droit de la carte"
					className="map-right-half"
				/>
				{showParchment && (
					<article
						className={`parchment-container ${validOath ? "magic-glow" : ""}`}
					>
						<img
							src="/images/parchemin-vide.webp"
							alt="parchemin"
							className="parchment-image"
						/>
						<div className="serment-container">
							{!validOath && (
								<>
									<textarea
										className="parchment-textarea"
										placeholder="Prononce le serment..."
										value={answerOath}
										onChange={(e) => {
											setAnswerOath(e.target.value);
											setErrorOath("");
										}}
									/>
									<button
										className="button-reset"
										type="button"
										title="Valide le serment"
										onClick={oathValidate}
									>
										<img
											src="/images/validation-serment2.png"
											alt="validation serment"
											className="validation-image"
										/>
									</button>
									<p className={`error-msg ${errorOath ? "visible" : ""}`}>
										{errorOath}
									</p>
									<div className="crystal-section">
										<button
											className="button-reset"
											type="button"
											title="Affiche un indice"
											onClick={handleShowClue}
										>
											{errorOath && (
												<img
													src="/images/indice.webp"
													alt="indice"
													className="clue-image"
												/>
											)}
										</button>
										<p className={`error-msg ${showClue ? "visible" : ""}`}>
											{requiredOath}
										</p>
									</div>
								</>
							)}
							{validOath && (
								<section className="rules-container">
									<div className="rules-scroll">
										<p className="magic-text">{fullText}</p>
									</div>
									{gameButton && (
										<button
											type="button"
											title="accès au jeu"
											onClick={() => navigate("/game")}
											className="game-button"
										>
											<img
												src="/images/baguette-magique.png"
												alt="baguette magique"
											/>{" "}
											A toi de jouer, sorcier !
										</button>
									)}
								</section>
							)}
						</div>
					</article>
				)}
			</section>
		</div>
	);
}
export default Rules;
