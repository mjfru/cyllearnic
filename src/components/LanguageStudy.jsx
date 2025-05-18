import { useParams } from "react-router-dom";
import { russianCyrillic } from "../data/ru_cyrillic";
import { ukrainianCyrillic } from "../data/uk_cyrillic";

const datasets = {
	russian: russianCyrillic,
	ukrainian: ukrainianCyrillic,
};

const LanguageStudy = () => {
	// Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.
	// /:language becomes the key, whatever the selection is becomes the value. ie. {language: 'ukrainian'}
	// console.log(useParams());
	const { language } = useParams();
	const selectedLanguage = datasets[language];
	return (
		<>
			<h2>Language Study Page</h2>
			{selectedLanguage.map((letter) => {
				return <p>{letter.letterUpper}</p>;
			})}
		</>
	);
};

export default LanguageStudy;
