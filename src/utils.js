//* Helper function to shuffle the language arrays:
export const shuffle = (array) => {
	//* Randomize the order of the array elements in a new, copied array:
	return [...array].sort(() => Math.random() - 0.5);
};

export const getPercentage = (score, length) => {
  const percentage = Math.round(score / length * 100);
  return percentage;
};
