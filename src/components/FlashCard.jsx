import { useState } from "react";
import { useGlobalContext } from "../context";

const FlashCard = ({ removeCard, ...letter }) => {
	const { letterUpper, letterLower, pronunciation, example, meaning, id } =
		letter;
	const [isFlipped, setIsFlipped] = useState(false);
	const { fontType } = useGlobalContext();

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<>
			<div
				className={`flash-card ${isFlipped ? "flipped" : ""}`}
				onClick={handleClick}
				onDoubleClick={() => removeCard(id)}
			>
				<div className="flash-card-inner">
					<div className="card-side card-front">
						<h4
							className={
								fontType
									? "cyrillic flash-letters"
									: "cyrillic cursive flash-letters"
							}
						>
							{letterUpper} {letterLower}
						</h4>
					</div>

					<div className="card-side card-back">
						<div>
							<h4 className="flash-pronunciation">{pronunciation}</h4>
						</div>
						<div>
							<h5>
								{example} - {meaning}
							</h5>
						</div>
					</div>
				</div>
				{/* Fix this so it doesn't rotate on hover, resize/use an icon, distill into a component */}
				{/* <button onClick={() => removeCard(id)}>X</button> */}
			</div>
		</>
	);
};

export default FlashCard;
