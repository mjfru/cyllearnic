import { useParams } from "react-router-dom";
import { russianCyrillic } from "../data/ru_cyrillic";
import { ukrainianCyrillic } from "../data/uk_cyrillic";
import ActivityNav from "./ActivityNav";
import { useEffect, useState } from "react";
import QuizCard from "./QuizCard";

useEffect;

const datasets = {
	russian: russianCyrillic,
	ukrainian: ukrainianCyrillic,
};

const Quiz = () => {
	const [userAnswer, setUserAnswer] = useState("");
	// console.log(userAnswer);

	const { language } = useParams();
	const letters = datasets[language];
	// console.log(selectedLanguage);

	const handleChange = (e) => {
		e.preventDefault();
		setUserAnswer(e.target.value);
	};

	const getRandomLetter = () => {
		const randomLetter = letters[Math.floor(Math.random() * letters.length)];
		// console.log(randomLetter);
		return randomLetter;
	};

	const quizLetter = getRandomLetter();
	const { letterUpper, letterLower } = quizLetter;
	// console.log(quizLetter);

	/*
	//  * For quiz all (default), get one random letter from the selected language array and display it.
	 * An onClick, for now, takes this letter out of the array, and displays a new one, repeating until there's none left and displaying a placeholder message.
   * Will incorporate useState to hold an initial array and remove items via .filter()
	 */

	return (
		<main>
			<h1 className="quiz-test">This is the future home of quizzes.</h1>
			<ActivityNav />
			<div className="quiz-container">
				<div className="quiz-card">
					<QuizCard letterUpper={letterUpper} letterLower={letterLower} />
				</div>

				<input
					type="text"
					value={userAnswer}
					onChange={handleChange}
					placeholder="What's this letter in English?"
				/>
				<button>Submit</button>
			</div>
		</main>
	);
};

export default Quiz;



	// const quizFive = [];
	// const quizTen = [];
	// const quizAll = [];


{
	/* <div className="quiz-select">
					<label htmlFor="">Quiz All Letters:</label>
					<input type="radio" name="quizSelect" id="" defaultChecked />
					<label htmlFor="">Quiz 10 Random Letters:</label>
					<input type="radio" name="quizSelect" id="" />
					<label htmlFor="">Quiz 5 Random Letters:</label>
					<input type="radio" name="quizSelect" id="" />
				</div> */
}
