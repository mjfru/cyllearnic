import { useParams } from "react-router-dom";
import { russianCyrillic } from "../data/ru_cyrillic";
import { ukrainianCyrillic } from "../data/uk_cyrillic";

import ActivityNav from "./ActivityNav";
import FlashCard from "./Flashcard";


const datasets = {
	russian: russianCyrillic,
	ukrainian: ukrainianCyrillic,
};

const FlashCards = () => {
	const { language } = useParams();
	const selectedLanguage = datasets[language];

	return (
		<>
			<h1>This is the future page of flashcard study</h1>
			<ActivityNav />
			<div className="flashcard-container">
				{selectedLanguage.map((letter) => {
          return <FlashCard {...letter} key={letter.id}/>
					// return <p key={letter.id}>{letter.letterUpper}</p>;
				})}
			</div>
		</>
	);
};

export default FlashCards;
