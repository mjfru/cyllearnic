import { useParams } from "react-router-dom";
import { russianCyrillic } from "../data/ru_cyrillic";
import { ukrainianCyrillic } from "../data/uk_cyrillic";
import { serbianCyrillic } from "../data/sb_cyrillic";
import LetterCard from "./LetterCard";
import ActivityNav from "./ActivityNav";

const datasets = {
	russian: russianCyrillic,
	ukrainian: ukrainianCyrillic,
	serbian: serbianCyrillic,
};

const LanguageStudy = () => {
	// Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>.
	// /:language becomes the key, whatever the selection is becomes the value. ie. {language: 'ukrainian'}
	// console.log(useParams());
	const { language } = useParams();
	const selectedLanguage = datasets[language];

	return (
		<main>
			<ActivityNav />
			<h2 className="page-heading">Study {language} Cyrillic</h2>
			{/* Placeholder examples for conditional rendering later... */}
			{/* {language === "russian" && <p>Russian!</p>}
			{language === "ukrainian" && <p>Ukrainian!</p>} */}
			<div className="study-container">
				{selectedLanguage.map((letter) => {
					return <LetterCard {...letter} key={letter.id} />;
				})}
			</div>
		</main>
	);
};

export default LanguageStudy;
