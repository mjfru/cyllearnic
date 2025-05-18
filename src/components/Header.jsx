import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<Link to="/">
				<h3 className="logo">Cyllearnic</h3>
			</Link>

			<nav className="nav-container">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Select Language</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
