import { getPercentage } from "../utils";

const QuizResults = ({ score, quizLetters }) => {
	const finalPercentage = getPercentage(score, quizLetters.length);
  return (
		<div className="results-container">
			<p>
				Your score: {score}/{quizLetters.length} ({finalPercentage}%)
			</p>
			<button onClick={() => window.location.reload()} className="btn btn-outline-primary">Try Again</button>
		</div>
	);
};

export default QuizResults;
