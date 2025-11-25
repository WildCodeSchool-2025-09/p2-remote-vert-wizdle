import { Link } from "react-router";

function Header() {
	return (
		<header>
			<Link to="/">
				<img src="/images/logo.webp" alt="Wizdle" />
			</Link>
		</header>
	);
}
export default Header;
