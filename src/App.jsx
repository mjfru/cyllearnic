import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import LanguageStudy from "./components/LanguageStudy";
import FlashCards from "./components/FlashCards";
import Quiz from "./components/Quiz";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/study/:language" element={<LanguageStudy />} />
					<Route path="/flashcards/:language" element={<FlashCards />} />
					<Route path="/quiz/:language" element={<Quiz />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
