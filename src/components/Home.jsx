import { Link } from "react-router-dom";

const Main = () => {
	return (
		<main className="hero-content">
			<div className="main-headers">
				<h2>Choose a Cyrillic alphabet to study:</h2>
			</div>
			<nav className="lang-select-container">
				<Link to="/study/russian">
					<button className="lang-nav-btn" id="rus-btn">
						Russian
					</button>
				</Link>
				<Link to="/study/ukrainian">
					<button className="lang-nav-btn" id="ukr-btn">
						Ukrainian
					</button>
				</Link>
				<Link to="/study/serbo_croatian">
					<button className="lang-nav-btn" disabled>
						Serbian (Coming Next)
					</button>
				</Link>
				<Link to="/study/bulgarian">
					<button className="lang-nav-btn" disabled>
						Bulgarian (Coming Soon)
					</button>
				</Link>
				<Link to="/study/mongolian">
					<button className="lang-nav-btn" disabled>
						Mongolian (Coming Later)
					</button>
				</Link>
			</nav>
		</main>
	);
};

export default Main;
