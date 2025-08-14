// React
import { useState } from "react";
import { useParams } from "react-router-dom";

// Data
import { russianCyrillic } from "../data/ru_cyrillic";
import { ukrainianCyrillic } from "../data/uk_cyrillic";

// Components
import ActivityNav from "./ActivityNav";
import FlashCard from "./FlashCard";

// Other
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const datasets = {
	russian: russianCyrillic,
	ukrainian: ukrainianCyrillic,
};

const FlashCards = () => {
	const { language } = useParams();
	const selectedLanguage = datasets[language];

	// What the UI actively uses:
	const [flashcards, setFlashcards] = useState(selectedLanguage);

	// The "reset" pack to ensure the order of cards when hitting the reset button:
	const [defaultCards] = useState(selectedLanguage);

	// Shuffle order of cards-- maybe in a seperate component & reset to default:

	// Reset default cards & order:
	const handleReset = () => {
		setFlashcards(defaultCards);
	};

	// Remove a card:
	const removeCard = (cardId) => {
		setFlashcards((previousCards) => {
			const updatedCards = previousCards.filter((card) => card.id !== cardId);
			return updatedCards;
		});
	};

	return (
		<main>
			<ActivityNav />
			<h2 className="page-heading">Flashcards</h2>

			<div className="flashcard-bar-container">
				<div className="flashcard-unique">
					<aside className="instructions">
						Hover a card to reveal details, double click to delete from the
						deck.
					</aside>
					<div className="flashcard-buttons">
						<button className="btn btn-sm btn-primary">
							Shuffle <FontAwesomeIcon icon={faShuffle} />
						</button>
						<button className="btn btn-sm btn-primary" onClick={handleReset}>
							Reset <FontAwesomeIcon icon={faArrowsRotate} />
						</button>
					</div>
				</div>
			</div>

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
