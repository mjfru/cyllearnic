const QuizTracker = ({ quizLetters, currentIndex }) => {
	return (
		<div>
			<p>
				Progress: {currentIndex} / {quizLetters}
			</p>
		</div>
	);
};

export default QuizTracker;
