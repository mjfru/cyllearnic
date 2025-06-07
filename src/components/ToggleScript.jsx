const ToggleScript = ({ fontType, setFontType }) => {
	console.log(`State value upon loading is: ${fontType}.}`);

	const handleChange = (e) => {
		console.log(`Checked value is: ${e.target.checked}`);
		console.log(`State is: ${fontType}`);
		setFontType(!fontType);
	};

	return (
		<div className="form-check form-switch">
			<input
				className="form-check-input"
				type="checkbox"
				role="switch"
				id="switchCheckDefault"
				value={fontType}
				onChange={handleChange}
			/>
			<label className="form-check-label" htmlFor="switchCheckDefault">
				Toggle Print / Cursive
			</label>
		</div>
	);
};

export default ToggleScript;
