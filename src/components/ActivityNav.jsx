import { Link, useParams } from "react-router-dom";
import ToggleScript from "./ToggleScript";

const ActivityNav = () => {
	const { language } = useParams();
  

	return (
		<>
			<div className="activity-nav">
				<Link to={`/study/${language}`}>
					<button type="button" className="btn btn-primary activity-link">Study</button>
				</Link>
				<Link to={`/flashcards/${language}`}>
					<button type="button" className="btn btn-primary activity-link">Flashcards</button>
				</Link>
				<Link to={`/quiz/${language}`}>
					<button type="button" className="btn btn-primary activity-link">Quiz</button>
				</Link>
			</div>
			<div className="toggle-container">
        {/* Move to Navbar eventually and group with Dark/Light mode toggle */}
				<ToggleScript />
			</div>
		</>
	);
};

export default ActivityNav;
