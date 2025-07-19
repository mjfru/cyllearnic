import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { shuffle } from "../utils";
import { russianCyrillic } from "../data/ru_cyrillic";
import { ukrainianCyrillic } from "../data/uk_cyrillic";

import ActivityNav from "./ActivityNav";
import QuizCard from "./QuizCard";
import QuizTracker from "./QuizTracker";
import QuizResults from "./QuizResults";

const datasets = {
	russian: russianCyrillic,
	ukrainian: ukrainianCyrillic,
};

const Quiz = () => {
	//* Dynamically adjust to what language is selected, same as previous components
	const { language } = useParams();
	//* Store them in a new array to use
	const letters = datasets[language];

	//* useState for getting, setting, and randomizing quizzes:
	const [quizLetters, setQuizLetters] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [userAnswer, setUserAnswer] = useState("");

	//* useState for tracking the quiz (score, ending, etc.):
	const [score, setScore] = useState(0);
	//* This is added to prevent a double-trigger:
	const [hasAnswered, setHasAnswered] = useState(false);

	const [answerStatus, setAnswerStatus] = useState(null);
	const [quizFinished, setQuizFinished] = useState(false);

	//* useEffect will shuffle and store letters when this component mounts:
	useEffect(() => {
		const shuffledLetters = shuffle(letters);
		setQuizLetters(shuffledLetters);
		setCurrentIndex(0);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [language]);

	//* This sets a letterUpper/Lower to simply exist and get populated after the current letter is loaded.
	//? Destructuring immediately led to a Type Error.
	let letterUpper = "";
	let letterLower = "";
	const currentLetter = quizLetters[currentIndex];
	if (currentLetter) {
		({ letterUpper, letterLower } = currentLetter);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		//* If there's no letter to be displayed, don't do anything:
		if (!currentLetter || hasAnswered) return;
		setHasAnswered(true);

		//* Checking correct or incorrect entries and making them uniform:
		const correctAnswer = currentLetter.pronunciation.toLowerCase().trim();
		const userInput = userAnswer.toLowerCase().trim();

		if (userInput === correctAnswer) {
			setScore((previousScore) => previousScore + 1);
			setAnswerStatus("correct");
		} else {
			setAnswerStatus("incorrect");
		}
		//* Using setTimeout() to briefly 'hang' the answer status and show quick feedback to the user.
		setTimeout(() => {
			//* Reset input & answer status
			setAnswerStatus(null);
			setUserAnswer("");
			//* This will allow the next input but prevent a double-trigger:
			setHasAnswered(false);
			//* Display next letter until quiz is finished:
			if (currentIndex + 1 < quizLetters.length) {
				//* Cycles through the array since it's already randomized, no need to remove items every time.
				setCurrentIndex((previousIndex) => previousIndex + 1);
			} else {
				setQuizFinished(true);
			}
		}, 500);
	};

	const handleChange = (e) => {
		e.preventDefault();
		setUserAnswer(e.target.value);
	};

	return (
		<main>
			<h2 className="page-heading">{language} Quiz</h2>
			<ActivityNav />
			<div className="quiz-container">
				{quizLetters.length === 0 ? (
					<p>Loading Quiz...</p>
				) : (
					<QuizCard
						letterUpper={letterUpper}
						letterLower={letterLower}
						answerStatus={answerStatus}
					/>
				)}

				{/* //! Style similar to button below, center */}
				{quizFinished ? (
					<QuizResults score={score} quizLetters={quizLetters} />
				) : (
					// ! Make this disappear at the end of the quiz, only showing the results
					<form onSubmit={handleSubmit}>
						<div className="answer-container">
							<input
								type="text"
								className="form-control"
								value={userAnswer}
								onChange={handleChange}
								placeholder="What's this letter in English?"
							/>
							<button
								className="btn-submit"
								type="submit"
								disabled={userAnswer.trim() === "" || hasAnswered}
							>
								Submit
							</button>
						</div>
					</form>
				)}
			</div>
			{!quizFinished && <QuizTracker score={score} quizLetters={quizLetters} />}
		</main>
	);
};

export default Quiz;
