import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	const handleChange = (e) => {
		const targetLanguage = e.target.value;
		if (targetLanguage) {
			navigate(`/study/${targetLanguage}`);
		}
	};

	return (
		<header className="header">
			<Link to="/">
				<h2 className="logo">Cyllearnic</h2>
			</Link>

			<nav className="nav-container">
				<Link to="/" className="nav-link">
					Home
				</Link>
				<Link to="/about" className="nav-link">
					About
				</Link>
				<div className="language-nav-container nav-link">
					<label>Switch Language: </label>
					<select onChange={handleChange} className="language-option">
						<option value="" defaultValue="---" className="language-option">
							---
						</option>
						<option value="russian" className="language-option">Russian</option>
						<option value="ukrainian" className="language-option">Ukrainian</option>
					</select>
				</div>
			</nav>
		</header>
	);
};

export default Header;
