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
		<main>
			<h2>Flashcards</h2>
			<ActivityNav />
			<div className="flashcard-container">
				{selectedLanguage.map((letter) => {
          return <FlashCard {...letter} key={letter.id}/>
				})}
			</div>
		</main>
	);
};

export default FlashCards;
