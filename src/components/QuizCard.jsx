const QuizCard = ({ letterUpper, letterLower }) => {
	return (
		<div className="quiz-card">
			<h2>
				{letterUpper} {letterLower}
			</h2>
		</div>
	);
};

export default QuizCard;
