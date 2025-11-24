import moment from "moment";
import "../styles/score.css";
import "../styles/scoreResponsive.css";
import imgCoix from "../images/croix.svg";
import imgSablier from "../images/sablier.svg";
import type { Character } from "../interfaces/interfaces";
import CharacterCardContainer from "./CharacterCardContainer";

type ScoreProps = {
	time: number;
	usedClue: boolean;
	attemptCount: number;
	todayCharacter: Character | undefined;
	setScoreView: React.Dispatch<React.SetStateAction<boolean>>;
};

function Score({
	time,
	usedClue,
	attemptCount,
	todayCharacter,
	setScoreView,
}: ScoreProps) {
	const timeBis = Number(time) || 0;
	const timeAfficher = moment.utc(timeBis).format("HH:mm:ss");
	const tentativeBis = Number(attemptCount) || 0;
	const indiceBis = usedClue ? 500 : 0;
	let score = 10500 - timeBis * 0.1 - tentativeBis * 500 - indiceBis;
	if (score < 0) {
		score = 0;
	}
	const tableauMaison = [
		"Gryffondor",
		"Poufsouffle",
		"Serdaigle",
		"Serpentard",
	];
	const maison =
		tableauMaison[Math.floor(Math.random() * tableauMaison.length)];

	return (
		<section id="popop-score">
			<img
				src={imgCoix}
				alt="Une croix"
				onClick={() => setScoreView(false)}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === "Spacebar" || e.key === " ")
						setScoreView(false);
				}}
			/>
			<article>
				<h2>MAGISTRAL !</h2>
				<p>{score} pts</p>
				<p>pour {maison}</p>
				<div>
					<img src={imgSablier} alt="Un sablier" />
					<p>{timeAfficher}</p>
				</div>
				<div>
					<p>
						Indice utilisé :<span>{usedClue}</span>
					</p>
					<p>
						Tentatives :<span>{attemptCount}</span>
					</p>
				</div>
			</article>
			<article>
				<CharacterCardContainer todayCharacter={todayCharacter} />
			</article>
		</section>
	);
}
export default Score;
