import { useParams } from "react-router-dom";
import { russianCyrillic } from "../data/ru_cyrillic";
import { ukrainianCyrillic } from "../data/uk_cyrillic";
import ActivityNav from "./ActivityNav";
import { useState } from "react";

const datasets = {
	russian: russianCyrillic,
	ukrainian: ukrainianCyrillic,
};

const Quiz = () => {
	const [userAnswer, setUserAnswer] = useState("");
	console.log(userAnswer);

	const { language } = useParams();
	const selectedLanguage = datasets[language];
	console.log(selectedLanguage);

  /*
  * For quiz all (default), get one random letter from the selected language array and display it.
  * An onClick, for now, takes this letter out of the array, and displays a new one, repeating until there's none left and displaying a placeholder message.
  */

	// const quizFive = [];
	// const quizTen = [];
	// const quizAll = [];

	return (
		<main>
			<h1 className="quiz-test">This is the future home of quizzes.</h1>
			<ActivityNav />
			<div className="quiz-container">
				<div className="quiz-card">
					<p>Quiz Placeholder</p>
				</div>
				<div className="quiz-select">
					<label htmlFor="">Quiz All Letters:</label>
					<input type="radio" name="quizSelect" id="" defaultChecked />
					<label htmlFor="">Quiz 10 Random Letters:</label>
					<input type="radio" name="quizSelect" id="" />
					<label htmlFor="">Quiz 5 Random Letters:</label>
					<input type="radio" name="quizSelect" id="" />
				</div>
				<input
					type="text"
					value={userAnswer}
					onChange={(e) => setUserAnswer(e.target.value)}
				/>
				<button>Submit</button>
			</div>
		</main>
	);
};

export default Quiz;
