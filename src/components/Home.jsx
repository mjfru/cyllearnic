import { Link } from "react-router-dom";

const Main = () => {
	return (
		<>
			<div className="main-headers">
				<h1 className="text-3xl font-bold underline">Welcome to Cyllearnic</h1>
				<h2>Choose your desired Cyrillic alphabet to study:</h2>
			</div>
			<nav className="lang-select-container">
				<Link to="/study/russian">
					<button className="lang-nav-btn">Russian</button>
				</Link>
				<Link to="/study/ukrainian">
					<button className="lang-nav-btn">Ukrainian</button>
				</Link>
				<Link to="/study/serbo_croatian">
					<button className="lang-nav-btn" disabled>
						Serbo-Croatian (Coming Soon)
					</button>
				</Link>
				<Link to="/study/bulgarian">
					<button className="lang-nav-btn" disabled>
						Bulgarian (Coming Soon)
					</button>
				</Link>
				<Link to="/study/mongolian">
					<button className="lang-nav-btn" disabled>
						Mongolian (Coming Soon)
					</button>
				</Link>
			</nav>
		</>
	);
};

export default Main;
