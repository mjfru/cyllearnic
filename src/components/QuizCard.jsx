import { useGlobalContext } from "../context";

const QuizCard = ({ letterUpper, letterLower, answerStatus }) => {
	const { fontType } = useGlobalContext();

	return (
		<div
			className={`quiz-card ${
				answerStatus === "correct"
					? "quiz-correct"
					: answerStatus === "incorrect"
					? "quiz-incorrect"
					: ""
			}`}
		>
			<h2
				className={
					fontType ? "cyrillic quiz-letter " : "cyrillic cursive quiz-letter"
				}
			>
				{letterUpper} {letterLower}
			</h2>
		</div>
	);
};

export default QuizCard;
