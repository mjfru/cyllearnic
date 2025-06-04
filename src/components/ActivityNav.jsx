import { Link, useParams } from "react-router-dom";

const ActivityNav = () => {
	const { language } = useParams();

	return (
		<div className="activity-nav">
			<Link to={`/study/${language}`} className="activity-link">
				<button>Study</button>
			</Link>
			<Link to={`/flashcards/${language}`} className="activity-link">
				<button>Flashcards</button>
			</Link>
			<Link to={`/quiz/${language}`} className="activity-link">
				<button>Quiz</button>
			</Link>
		</div>
	);
};

export default ActivityNav;
