import { getPercentage } from "../utils";

const QuizResults = ({ score, quizLetters }) => {
	const finalPercentage = getPercentage(score, quizLetters.length);
  return (
		<div>
			<p>
				Your score: {score}/{quizLetters.length} ({finalPercentage}%)
			</p>
			<button onClick={() => window.location.reload()}>Try Again</button>
		</div>
	);
};

export default QuizResults;
