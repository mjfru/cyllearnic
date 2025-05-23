const LetterCard = ({
	// id,
	letterUpper,
	letterLower,
	pronunciation,
	example,
	meaning,
}) => {
	return (
		<div className="reg-card">
			<div>
				<h4>
					{letterUpper} {letterLower}
				</h4>
				<p>English Pronunciation: {pronunciation}</p>
				<p>Example: {example}</p>
				<p>Meaning: {meaning}</p>
			</div>
		</div>
	);
};

export default LetterCard;
