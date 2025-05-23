import { Link, useParams } from "react-router-dom";

const ActivityNav = () => {
	const { language } = useParams();

	return (
		<div className="activity-nav">
			<Link to={`/study/${language}`}>
				<button>Study</button>
			</Link>
			<Link to={`/flashcards/${language}`}>
				<button>Flashcards</button>
			</Link>
			<Link to={`/quiz/${language}`}>
				<button>Quiz</button>
			</Link>
		</div>
	);
};

export default ActivityNav;
