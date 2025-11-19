import "../styles/clue.css";

interface ClueProps {
	attemptCount: number;
}

function Clue({ attemptCount }: ClueProps) {
	const isDisabled = attemptCount < 5;

	return (
		<>
			<button
				type={"button"}
				disabled={isDisabled}
				className={isDisabled ? "clue-button-disabled" : "clue-button"}
			>
				Indice
			</button>
		</>
	);
}
export default Clue;
