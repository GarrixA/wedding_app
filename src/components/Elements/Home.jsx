import React, { useState } from "react";
import wedding_data from "../Mock";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % wedding_data.length);
	};

	const handlePrev = () => {
		setDirection(-1);
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + wedding_data.length) % wedding_data.length
		);
	};

	const currentAlbum = wedding_data[currentIndex];

	const slideVariants = {
		initial: (direction) => ({
			x: direction > 0 ? 200 : -200,
			opacity: 0,
			scale: -1,
		}),
		animate: {
			x: 0,
			opacity: 1,
			scale: 1,
			transition: {
				type: "spring",
				delay: 0.4,
				ease: "linear",
			},
		},
		exit: (direction) => ({
			x: direction < 0 ? 200 : -200,
			opacity: 0,
		}),
	};

	return (
		<>
			<motion.div className="relative mx-[10%] h-[75vh] flex justify-center items-center">
				<h1 className="font-black text-4xl absolute text-center w-full top-2">
					{currentAlbum.album1 || currentAlbum.album2 || currentAlbum.album3}
				</h1>
				<motion.div className="relative w-full h-full flex items-center justify-center gap-4">
					<AnimatePresence custom={direction}>
						<motion.div
							key={currentAlbum.image1}
							className="absolute left-0 w-1/3 cursor-pointer rounded overflow-hidden"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							custom={direction}
						>
							<img
								src={currentAlbum.image1}
								alt={
									currentAlbum.album1 ||
									currentAlbum.album2 ||
									currentAlbum.album3
								}
								className="w-full h-full object-cover"
							/>
						</motion.div>
					</AnimatePresence>
					<AnimatePresence custom={direction}>
						<motion.div
							key={currentAlbum.image2}
							className="blockquote absolute bg-red-300 z-10 w-1/2 cursor-pointer rounded overflow-hidden shadow-md"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							custom={direction}
						>
							<img
								src={currentAlbum.image2}
								alt={
									currentAlbum.album1 ||
									currentAlbum.album2 ||
									currentAlbum.album3
								}
								className="w-full h-full object-cover"
							/>
						</motion.div>
					</AnimatePresence>
					<AnimatePresence custom={direction}>
						<motion.div
							key={currentAlbum.image3}
							className="absolute right-0 w-1/3 cursor-pointer rounded-xl overflow-hidden"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							custom={direction}
						>
							<img
								src={currentAlbum.image3}
								alt={
									currentAlbum.album1 ||
									currentAlbum.album2 ||
									currentAlbum.album3
								}
								className="w-full h-full object-cover"
							/>
						</motion.div>
					</AnimatePresence>
				</motion.div>
				<button
					onClick={handlePrev}
					className="absolute -left-[4rem] top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
				>
					Prev
				</button>
				<button
					onClick={handleNext}
					className="absolute -right-[4rem] top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
				>
					Next
				</button>
			</motion.div>
		</>
	);
};

export default Home;
