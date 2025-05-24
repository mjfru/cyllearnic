const FlashCard = ({ ...letter }) => {
	const { letterUpper, letterLower, pronunciation, example, meaning } = letter;
	return (
		<div className="flash-card">
			<div className="flash-card-inner">
				<div className="card-side card-front">
					<h4 className="c-letters flash-letters">
						{letterUpper} {letterLower}
					</h4>
				</div>

				<div className="card-side card-back">
					<div>
						<h4>{pronunciation}</h4>
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
