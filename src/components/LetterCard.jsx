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
					Example: <span className={fontType ? "cyrillic example-text" : "cyrillic larger-text cursive"}>{example}</span>
					{/* Example: <span className="example-text">{example}</span> */}
				</p>
				<p>Meaning: {meaning}</p>
			</div>
		</div>
	);
};

export default LetterCard;
