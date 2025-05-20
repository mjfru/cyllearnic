import { Link, useParams } from "react-router-dom";

const Quiz = () => {
	const { language } = useParams();

	return (
		<>
			<p>This is the future home of quizzes.</p>
			<Link to={`/flashcards/${language}`}>
				<button>Practice Flashcards</button>
			</Link>
			<Link to={`/study/${language}`}>
				<button>Study Page</button>
			</Link>
		</>
	);
};

export default Quiz;
