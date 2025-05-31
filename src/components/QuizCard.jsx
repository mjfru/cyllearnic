const QuizCard = ({ letterUpper, letterLower, answerStatus }) => {
	return (
		<div
			className={`quiz-card ${
				answerStatus === "correct"
					? "quiz-correct-border"
					: answerStatus === "incorrect"
					? "quiz-incorrect-border"
					: ""
			}`}
		>
			<h2 className="quiz-letter">
				{letterUpper} {letterLower}
			</h2>
		</div>
	);
};

export default QuizCard;
