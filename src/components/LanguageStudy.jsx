import { Link, useParams } from "react-router-dom";
import { russianCyrillic } from "../data/ru_cyrillic";
import { ukrainianCyrillic } from "../data/uk_cyrillic";
import LetterCard from "./LetterCard";

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
			{language === "russian" && <p>Russian!</p>}
			{language === "ukrainian" && <p>Ukrainian!</p>}

			{selectedLanguage.map((letter) => {
				return (
					<div key={letter.id}>
						<LetterCard {...letter} />
					</div>
				);
			})}
			<Link to={`/flashcards/${language}`}><button>Study Flashcards</button></Link>
		</>
	);
};

export default LanguageStudy;
