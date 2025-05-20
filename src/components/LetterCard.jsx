const LetterCard = ({
	// id,
	letterUpper,
	letterLower,
	pronunciation,
	example,
	meaning,
}) => {
	return (
		<div style={{ border: "1px solid black", width: "150px", height: "150px" }}>
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
