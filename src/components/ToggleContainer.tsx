import { useState } from "react";
import CharacterCard from "./CharacterCard";

export default function ToggleButton() {
	const [open, setOpen] = useState(false);

	return (
		<div className="toggle-container">
			<h2>TodayCharacter</h2>
			<button
				type="button"
				className="toggle-button"
				onClick={() => setOpen(!open)}
			>
				<img
					src="./src/asset/images/croix-deploiement.png"
					alt="croix de deploiement"
				/>
			</button>
			{open && <CharacterCard />}
		</div>
	);
}
