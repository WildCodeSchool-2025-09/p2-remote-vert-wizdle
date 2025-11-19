import Search from "../components/Search";
import Timer from "../components/Timer";
import "../styles/Search.css";
import "../styles/Game.css";
import { useState } from "react";

function Game() {
	const [time, setTime] = useState(0);

	return (
		<>
			<section className="timer-clue">
				<article>
					<Timer time={time} />
				</article>
				<article>
					<p>Clues</p>
				</article>
			</section>
			<Search setTime={setTime} />
		</>
	);
}
export default Game;
