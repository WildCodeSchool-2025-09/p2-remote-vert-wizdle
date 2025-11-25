import { useNavigate } from "react-router";
import "../styles/MarauderMapClose.css";

function MarauderMapClose() {
	const navigate = useNavigate();

	return (
		<div className="marauder-container">
			<button
				className="button-reset"
				type="button"
				title="ouvrir la carte du marauder"
				onClick={() => navigate("/marauder-map/rules")}
			>
				<img
					className="marauder-map"
					src="/images/marauder-map-close.jpg"
					alt="carte du marauder"
				/>
			</button>
		</div>
	);
}
export default MarauderMapClose;
