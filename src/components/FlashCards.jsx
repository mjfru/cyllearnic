import { Link, useParams } from "react-router-dom";

const FlashCards = () => {
	const { language } = useParams();
	return (
		<>
			<p>This is the future page of flashcard study</p>
			<Link to={`/quiz/${language}`}>
				<button>Take a quiz</button>
			</Link>
			<Link to={`/study/${language}`}>
				<button>Study Page</button>
			</Link>
		</>
	);
};

export default FlashCards;
