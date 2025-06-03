import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	const handleChange = (e) => {
		const selectedLanguage = e.target.value;
		if (selectedLanguage) {
			navigate(`/study/${selectedLanguage}`);
		}
	};

	return (
		<header className="header">
			<Link to="/">
				<h3 className="logo">Cyllearnic</h3>
			</Link>

			<nav className="nav-container">
				<Link to="/">Home</Link>
				<Link to="">About</Link>
				<div className="language-nav">
					<p>Switch Language: </p>
					<select name="" id="" onChange={handleChange}>
						<option value="" disabled>
							{/* Why is this disappearing after initial render? -- Maybe move this into a component by itself */}
							Choose a language
						</option>
						<option value="russian">Russian</option>
						<option value="ukrainian">Ukrainian</option>
					</select>
				</div>
			</nav>
		</header>
	);
};

export default Header;
