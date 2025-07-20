import { getPercentage } from "../utils";

const QuizTracker = ({ quizLetters, currentIndex }) => {
  // const percentCorrect = getPercentage(score, length)
	return (
		<div>
			<p>
				Progress: {currentIndex} / {quizLetters}
			</p>
		</div>
	);
};

export default QuizTracker;
