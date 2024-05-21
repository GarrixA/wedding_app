export const handleNext = (setCurrentIndex, setDirection, wedding_data) => {
	setDirection(1);
	setCurrentIndex((prevIndex) => (prevIndex + 1) % wedding_data.length);
};

export const handlePrev = (setCurrentIndex, setDirection, wedding_data) => {
	setDirection(-1);
	setCurrentIndex(
		(prevIndex) => (prevIndex - 1 + wedding_data.length) % wedding_data.length
	);
};
