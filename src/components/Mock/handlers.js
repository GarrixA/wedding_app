export const handleNext = (setCurrentIndex, setDirection, album) => {
	setDirection(1);
	setCurrentIndex((prevIndex) => (prevIndex + 1) % album.length);
};

export const handlePrev = (setCurrentIndex, setDirection, album) => {
	setDirection(-1);
	setCurrentIndex((prevIndex) => (prevIndex - 1 + album.length) % album.length);
};
