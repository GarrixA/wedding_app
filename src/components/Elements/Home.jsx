import React, { useState } from "react";
import { Link } from "react-router-dom";
import wedding_data from "../Mock";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariants, titleVariants } from "../Mock/variants";
import { handleNext, handlePrev } from "../Mock/handlers";
import { GrNext, GrPrevious } from "react-icons/gr";

const Home = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const currentAlbum = wedding_data[currentIndex];

	const getAlbumRoute = (index) => {
		switch (index) {
			case 0:
				return "/album";
			case 1:
				return "/album";
			case 2:
				return "/album";
			default:
				return "#";
		}
	};

	return (
		<>
			<motion.div className=" home relative mx-[10%] h-[90vh] flex justify-center items-center mt-5">
				<AnimatePresence>
					<motion.h1
						key={
							currentAlbum.album1 || currentAlbum.album2 || currentAlbum.album3
						}
						className="font-black sm:text-4xl absolute text-center sm:w-full sm:top-8 text-xl z-50 sm:z-10 sm:bg-transparent -top-10 flex items-center justify-center bg-blue-500 px-4 rounded mt-[85%] sm:mt-0 lg:top-4"
						variants={titleVariants}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						{currentAlbum.album1 || currentAlbum.album2 || currentAlbum.album3}
					</motion.h1>
				</AnimatePresence>
				<motion.div className="relative w-full h-full flex sm:items-center sm:justify-center sm:gap-4 p-2 flex-col justify-between">
					<AnimatePresence custom={direction}>
						<motion.div
							key={currentAlbum.image1}
							className="absolute left-0 sm:w-[60%] md:w-[50%] lg:w-[60%] cursor-pointer rounded overflow-hidden flex flex-col sm:px-0 px-4 min-w-sum"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							custom={direction}
						>
							<Link to={getAlbumRoute(currentIndex)} className="relative">
								<img
									src={currentAlbum.image1}
									alt={
										currentAlbum.album1 ||
										currentAlbum.album2 ||
										currentAlbum.album3
									}
									className="w-full h-full object-cover border sm:border-none sm:mt-0 sm:rounded rounded-3xl"
								/>
								<div className="imageOverlay absolute inset-0 bg-black bg-opacity-20  hidden sm:flex"></div>
							</Link>
						</motion.div>
					</AnimatePresence>
					<AnimatePresence custom={direction}>
						<motion.div
							key={currentAlbum.image2}
							className="blockquote absolute z-10 sm:w-[70%] md:w-[65%] cursor-pointer sm:rounded rounded-3xl overflow-hidden shadow-md left-0 sm:left-[15%] w-full h-[50%] md:h-[70%] sm:mt-0 mt-[35%] lg:h-[80%]"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							custom={direction}
						>
							<Link to={getAlbumRoute(currentIndex)}>
								<img
									src={currentAlbum.image2}
									alt={
										currentAlbum.album1 ||
										currentAlbum.album2 ||
										currentAlbum.album3
									}
									className="w-full h-full object-cover border sm:border-none"
								/>
								<div className="imageOverlay absolute inset-0 bg-black sm:bg-opacity-20 bg-opacity-10"></div>
							</Link>
						</motion.div>
					</AnimatePresence>
					<AnimatePresence custom={direction}>
						<motion.div
							key={currentAlbum.image3}
							className="absolute right-0 sm:w-[60%] md:w-[50%] lg:w-[60%] cursor-pointer sm:rounded rounded-3xl overflow-hidden sm:px-0 px-4 sm:mt-0 mt-[95%]"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							custom={direction}
						>
							<Link to={getAlbumRoute(currentIndex)}>
								<img
									src={currentAlbum.image3}
									alt={
										currentAlbum.album1 ||
										currentAlbum.album2 ||
										currentAlbum.album3
									}
									className="w-full h-full object-cover border sm:border-none sm:mt-0 rounded-3xl sm:rounded"
								/>
								<div className="imageOverlay absolute inset-0 bg-black bg-opacity-20 hidden sm:flex"></div>
							</Link>
						</motion.div>
					</AnimatePresence>
				</motion.div>
				<button
					onClick={() =>
						handlePrev(setCurrentIndex, setDirection, wedding_data)
					}
					className="prev absolute sm:-left-[8%] -left-[10%] top-1/2 transform -translate-y-1/2 bg-black text-white sm:p-2 p-1 rounded-full z-50"
				>
					<GrPrevious />
				</button>
				<button
					onClick={() =>
						handleNext(setCurrentIndex, setDirection, wedding_data)
					}
					className="next absolute sm:-right-[8%] -right-[10%] top-1/2 transform -translate-y-1/2 bg-black text-white sm:p-2 p-1 rounded-full z-50"
				>
					<GrNext />
				</button>
			</motion.div>
		</>
	);
};

export default Home;
