import { Link } from "react-router";

function Home() {
	return (
		<>
			<h1>
				Le parchemin s’ouvre devant toi... sauras-tu percer ses mystères ?
			</h1>
			<section>
				<Link to="/rules">
					<button type="button">📜 Le Grimoire des Règles</button>
				</Link>
				<Link to="/game">
					<button type="button">
						<img
							src="./src/assets/images/baguette-magique.png"
							alt="baguette magique"
						/>
						À toi de jouer, sorcier !
					</button>
				</Link>
			</section>
		</>
	);
}
export default Home;
