import { Link, useParams } from "react-router-dom";
import ToggleScript from "./ToggleScript";
import { useState } from "react";

const ActivityNav = () => {
	const { language } = useParams();
  const [ fontType, setFontType ] = useState(true)

	return (
		<>
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
			<div className="toggle-container">
				<ToggleScript fontType={fontType} setFontType={setFontType}/>
			</div>
		</>
	);
};

export default ActivityNav;
