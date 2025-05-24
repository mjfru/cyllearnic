const FlashCard = ({ letterUpper, letterLower }) => {
	return (
		<div className="flash-card">
			<div className="card-side card-front">
				<h4 className="c-letters flash-letters">
					{letterUpper} {letterLower}
				</h4>
			</div>

      <div className="card-side card-back">
        <h4>Test</h4>
      </div>
		</div>
	);
};

export default FlashCard;
