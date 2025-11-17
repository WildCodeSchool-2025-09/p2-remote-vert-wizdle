import { useState } from "react";

function Timer() {
	const [time, setTime] = useState(0);
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

	function start() {
		if (!intervalId) {
			const startTime = Date.now() - time;
			const id = setInterval(() => {
				setTime(Date.now() - startTime);
			}, 10);
			setIntervalId(id);
		}
	}

	function stop() {
		if (intervalId) {
			clearInterval(intervalId);
			setIntervalId(null);
		}
	}

	function formatTime(elapsedTime: number) {
		const minutes = String(
			Math.floor((elapsedTime / (1000 * 60)) % 60),
		).padStart(2, "0");
		const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(
			2,
			"0",
		);
		const milliseconds = String(Math.floor((elapsedTime % 1000) / 10)).padStart(
			2,
			"0",
		);

		return `${minutes}:${seconds}:${milliseconds}`;
	}

	return (
		<>
			<h1>je suis un timer</h1>
			<p>{formatTime(time)}</p>
			<button type="button" onClick={() => start()}>
				Start
			</button>
			<button type="button" onClick={() => stop()}>
				Stop
			</button>
		</>
	);
}

export default Timer;
