import { useState } from "react";

const useSlideshow = (length) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + length) % length);
	};

	return { currentIndex, handleNext, handlePrev };
};

export default useSlideshow;
