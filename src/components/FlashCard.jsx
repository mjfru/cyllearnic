const FlashCard = ({ letterUpper, letterLower }) => {
	return (
		<div className="flash-card">
			<h4 className="c-letters flash-letters">
				{letterUpper} {letterLower}
			</h4>
		</div>
	);
};

export default FlashCard;
