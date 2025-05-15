import { russianCyrillic } from "../data/ru_cyrillic";

const Main = () => {
	return (
		<>
			<p>Languages & Buttons Here</p>
			{russianCyrillic.map((letter) => {
				const { letterUpper, letterLower } = letter;
				console.log(letterUpper, letterLower);
			})}
		</>
	);
};

export default Main;
