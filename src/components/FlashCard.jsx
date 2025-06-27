import { useGlobalContext } from "../context";

const FlashCard = ({ ...letter }) => {
	const { letterUpper, letterLower, pronunciation, example, meaning } = letter;
	const { fontType } = useGlobalContext();
	return (
		<div className="flash-card">
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
		</div>
	);
};

export default FlashCard;
