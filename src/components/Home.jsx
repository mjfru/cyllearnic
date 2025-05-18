import { Link } from "react-router-dom";

// import { russianCyrillic } from "../data/ru_cyrillic";

const Main = () => {
	return (
		<>
			<h1>Welcome to Cyllearnic</h1>
			<h2>Choose your desired cyrillic alphabet to study:</h2>
			<nav className="lang-select-container">
				<Link to="/study/russian">
					<button className="lang-nav-btn">Russian</button>
				</Link>
				<Link to="/study/ukrainian">
					<button className="lang-nav-btn">Ukrainian</button>
				</Link>

				{/* <button className="lang-nav-btn">Bulgarian</button>
				<button className="lang-nav-btn">Mongolian</button>
				<button className="lang-nav-btn">Serbo-Croatian</button> */}
			</nav>
			{/* {russianCyrillic.map((letter) => {
				const { letterUpper, letterLower } = letter;
				console.log(letterUpper, letterLower);
			})} */}
		</>
	);
};

export default Main;
