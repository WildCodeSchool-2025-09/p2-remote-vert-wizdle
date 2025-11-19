import Search from "../components/Search";
import Timer from "../components/Timer";
import "../styles/Search.css";
import "../styles/Game.css";
import { useState } from "react";

function Game() {
	const [time, setTime] = useState(0);
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

	return (
		<>
			<section className="timer-indice">
				<article>
					<Timer time={time} />
				</article>
				<article>
					<p>Indices</p>
				</article>
			</section>

			<Search
				time={time}
				setTime={setTime}
				intervalId={intervalId}
				setIntervalId={setIntervalId}
			/>
		</>
	);
}
export default Game;
