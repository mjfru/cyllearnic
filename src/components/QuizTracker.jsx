const QuizTracker = ({ score, quizLetters }) => {
	return (
		<div>
			<p>
				Answers Correct: {score} / {quizLetters.length}
			</p>
		</div>
	);
};

export default QuizTracker;
