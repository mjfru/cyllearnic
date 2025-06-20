import { useGlobalContext } from "../context";

const LetterCard = ({
	// id,
	letterUpper,
	letterLower,
	pronunciation,
	example,
	meaning,
}) => {
	const { fontType } = useGlobalContext();

	return (
		<div className="reg-card">
			<h4 className={fontType ? "cyrillic" : "cyrillic cursive"}>
				{letterUpper} {letterLower}
				<hr className="letter-line" />
			</h4>
			<div className="letter-details">
				<p>
					<span className="pronunciation">{pronunciation}</span>
				</p>
				<p>
					<span className="letter-label">Example:</span> {example}
				</p>
				<p>
					<span className="letter-label">Meaning:</span> {meaning}
				</p>
			</div>
		</div>
	);
};

export default LetterCard;
