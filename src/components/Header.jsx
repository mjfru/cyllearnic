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
			<div className="logo-container">
				<Link to="/" className="logo-link">
					<h1 className="logo">Cyllearnic</h1>
				</Link>
				<h2 className="sub-header">A WebApp for Learning Cyrillic Scripts</h2>
			</div>

			<nav className="nav-container">
				<Link to="/" className="navigation-link">
					Home
				</Link>
				<Link to="/about" className="navigation-link">
					About
				</Link>

				<div className="language-nav-container language-link">
					<label htmlFor="language-select">Learn: </label>
					<select
						onChange={handleChange}
						className="form-select form-select-sm language-option"
					>
						<option value="" defaultValue="---" className="language-option">
							---
						</option>
						<option value="russian" className="language-option">
							Russian
						</option>
						<option value="ukrainian" className="language-option">
							Ukrainian
						</option>
						<option value="serbian" className="language-option">
							Serbian
						</option>
					</select>
				</div>
			</nav>
		</header>
	);
};

export default Header;
