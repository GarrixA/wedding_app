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
			<motion.div className=" home relative mx-[10%] h-screen sm:h-[90vh] flex items-cent  mt-5">
				<AnimatePresence>
					<motion.h1
						key={
							currentAlbum.album1 || currentAlbum.album2 || currentAlbum.album3
						}
						className="font-black w-full top-[30%] text-sm sm:text-4xl absolute text-center sm:w-full sm:top-8 z-50 sm:z-10 sm:bg-transparent  bg-blue-500 px-4 rounded  sm:mt-0 lg:top-4"
						variants={titleVariants}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						{currentAlbum.album1 || currentAlbum.album2 || currentAlbum.album3}
					</motion.h1>
				</AnimatePresence>
				<motion.div className="relative w-full h-[70%] sm:h-[90%] p-3">
					<AnimatePresence custom={direction}>
						<motion.div
							key={currentAlbum.image1}
							className="absolute h-full justify-end items-start left-0  w-full md:w-full md:px-[10%] lg:px-[0%] lg:left-[50%] p-4 lg:w-[50%] lg:justify-center cursor-pointer rounded overflow-hidden flex flex-col sm:px-0 px-4"
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
							className="blockquote absolute top-[25%] md:top-[25%] xl:top-[18%] z-10 sm:w-full md:w-full lg:w-[60%] lg:h-[50%] lg:left-[20%] cursor-pointer sm:rounded rounded-3xl overflow-hidden shadow-md left-0 w-full h-[50%] md:h-[50%] xl:h-[70%] sm:mt-0"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							custom={direction}
						>
							<Link to={getAlbumRoute(currentIndex)} className="relative">
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
							className="absolute h-full justify-start items-start left-0 sm:w-full md:w-full md:px-[10%] lg:px-[0%] lg:w-[50%] lg:left-[0%] lg:justify-center cursor-pointer rounded overflow-hidden flex flex-col sm:px-0 px-4"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							custom={direction}
						>
							<Link to={getAlbumRoute(currentIndex)} className="relative">
								<img
									src={currentAlbum.image3}
									alt={
										currentAlbum.album1 ||
										currentAlbum.album2 ||
										currentAlbum.album3
									}
									className="w-full h-full object-cover border sm:border-none sm:mt-0 rounded-3xl sm:rounded"
								/>
								<div className="imageOverlay absolute inset-0 bg-black bg-opacity-20  hidden sm:flex"></div>
							</Link>
						</motion.div>
					</AnimatePresence>
				</motion.div>
				<button
					onClick={() =>
						handlePrev(setCurrentIndex, setDirection, wedding_data)
					}
					className="prev absolute sm:-left-[8%] -left-[10%] top-[35%] md:top-[45%] transform -translate-y-1/2 bg-black text-white sm:p-2 p-1 rounded-full z-50"
				>
					<GrPrevious />
				</button>
				<button
					onClick={() =>
						handleNext(setCurrentIndex, setDirection, wedding_data)
					}
					className="next absolute sm:-right-[8%] -right-[10%] top-[35%] md:top-[45%] transform -translate-y-1/2 bg-black text-white sm:p-2 p-1 rounded-full z-50"
				>
					<GrNext />
				</button>
			</motion.div>
		</>
	);
};

export default Home;
