const QuizTracker = ({ quizLetters, currentIndex }) => {
	return (
		<div className="quiz-tracker-container">
			<p className="quiz-tracker-text">
				Progress: {currentIndex} / {quizLetters}
			</p>
		</div>
	);
};

export default QuizTracker;
