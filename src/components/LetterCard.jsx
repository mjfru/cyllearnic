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
			<h4 className="c-letters">
				{letterUpper} {letterLower}
				<hr className="letter-line" />
			</h4>
			<div className="letter-details">
				<p>English Pronunciation: {pronunciation}</p>
				<p>Example: {example}</p>
				<p>Meaning: {meaning}</p>
			</div>
		</div>
	);
};

export default LetterCard;
