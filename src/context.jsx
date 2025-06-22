/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [fontType, setFontType] = useState(true);

	const toggleFont = () => {
		setFontType(!fontType);
		// console.log(`${fontType}`);
	};

	return (
		<AppContext.Provider value={{ fontType, toggleFont }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
