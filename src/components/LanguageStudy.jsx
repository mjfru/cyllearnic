import { useParams } from "react-router-dom";
import { russianCyrillic } from "../data/ru_cyrillic";

const datasets = {
	russian: russianCyrillic,
};

const LanguageStudy = () => {
	// Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.
  // /:language becomes the key, whatever the selection is becomes the value. ie. {language: 'ukrainian'}
	// console.log(useParams());
	const { language } = useParams();
	const selectedLanguage = datasets[language];
	return (
		<>
			{selectedLanguage.map((letter) => {
				return <p>{letter.letterUpper}</p>;
			})}
			<h2>Language Study Page</h2>
		</>
	);
};

export default LanguageStudy;
