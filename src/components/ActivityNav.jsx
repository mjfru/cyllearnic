import { Link, useParams } from "react-router-dom";

const ActivityNav = () => {
	const { language } = useParams();

	return (
		<div className="activity-nav">
			<Link to={`/study/${language}`}>
				<button className="activity-link">Study</button>
			</Link>
			<Link to={`/flashcards/${language}`}>
				<button className="activity-link">Flashcards</button>
			</Link>
			<Link to={`/quiz/${language}`}>
				<button className="activity-link">Quiz</button>
			</Link>
		</div>
	);
};

export default ActivityNav;
