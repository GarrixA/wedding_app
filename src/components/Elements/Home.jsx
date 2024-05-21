import React, { useState } from "react";
import wedding_data from "../Mock";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariants } from "../Mock/variants";
import { handleNext, handlePrev } from "../Mock/handlers";
import { titleVariants } from "../Mock/variants";

const Home = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const currentAlbum = wedding_data[currentIndex];

	return (
		<>
			<motion.div className="relative mx-[10%] h-[75vh] flex justify-center items-center">
				<AnimatePresence>
					<motion.h1
						key={
							currentAlbum.album1 || currentAlbum.album2 || currentAlbum.album3
						}
						className="font-black text-4xl absolute text-center w-full top-2"
						variants={titleVariants}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						{currentAlbum.album1 || currentAlbum.album2 || currentAlbum.album3}
					</motion.h1>
				</AnimatePresence>
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
					onClick={() =>
						handlePrev(setCurrentIndex, setDirection, wedding_data)
					}
					className="prev absolute -left-[8%] top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
				>
					Prev
				</button>
				<button
					onClick={() =>
						handleNext(setCurrentIndex, setDirection, wedding_data)
					}
					className="next absolute -right-[8%] top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded"
				>
					Next
				</button>
			</motion.div>
		</>
	);
};

export default Home;
