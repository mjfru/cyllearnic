import { useGlobalContext } from "../context";

const ToggleScript = () => {
  const { fontType, toggleFont } = useGlobalContext();

	return (
		<div className="form-check form-switch">
			<input
				className="form-check-input"
				type="checkbox"
				role="switch"
				id="switchCheckDefault"
        checked={!fontType}
				// value={fontType}
				onChange={toggleFont}
			/>
			<label className="form-check-label" htmlFor="switchCheckDefault">
				Toggle Print / Cursive
			</label>
		</div>
	);
};

export default ToggleScript;
