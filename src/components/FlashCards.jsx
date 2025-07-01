import { useParams } from "react-router-dom";
import { russianCyrillic } from "../data/ru_cyrillic";
import { ukrainianCyrillic } from "../data/uk_cyrillic";

import ActivityNav from "./ActivityNav";
import FlashCard from "./FlashCard";
import { useState } from "react";

const datasets = {
	russian: russianCyrillic,
	ukrainian: ukrainianCyrillic,
};

const FlashCards = () => {
	const { language } = useParams();
	const selectedLanguage = datasets[language];

	const [flashcards, setFlashcards] = useState(selectedLanguage);

	// Shuffle order of cards-- maybe in a seperate component & reset to default:

	// Remove a card:
	const removeCard = (cardId) => {
		setFlashcards((previousCards) => {
			const updatedCards = previousCards.filter((card) => card.id !== cardId);
			return updatedCards;
		});
	};

	return (
		<main>
			<h2 className="page-heading">Flashcards</h2>
			<ActivityNav />
			<aside className="instructions">
				Hover a card to reveal details, double click to delete from the deck.
			</aside>
			<div className="flashcard-container">
				{flashcards.map((letter) => {
					return (
						<FlashCard {...letter} key={letter.id} removeCard={removeCard} />
					);
				})}
			</div>
		</main>
	);
};

export default FlashCards;
