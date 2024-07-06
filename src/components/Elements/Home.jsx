import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { slideVariants, titleVariants } from "../Mock/variants";
import { handleNext, handlePrev } from "../Mock/handlers";
import { GrNext, GrPrevious } from "react-icons/gr";
import { API } from "../../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	fetchAlbumStart,
	fetchAlbumFailure,
	fetchAlbumSuccess,
} from "../../redux/feature/albumSlices";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { InfinitySpin } from "react-loader-spinner";

const Home = () => {
	const dispatch = useAppDispatch();

	const {
		data: album,
		loading,
		error,
	} = useAppSelector((state) => state.album);

	const fetchAlbums = async () => {
		dispatch(fetchAlbumStart());
		try {
			const response = await API.get("rubumu/all");
			const albums_data = response.data.allalbums;
			if (Array.isArray(albums_data)) {
				dispatch(fetchAlbumSuccess(albums_data));
			} else {
				throw new Error("Data format is not an array");
			}
		} catch (error) {
			dispatch(fetchAlbumFailure("Failed to fetch albums"));
			toast.error(error?.response?.data.message);
		}
	};

	useEffect(() => {
		if (!album.length) {
			fetchAlbums();
		}
	}, [dispatch, album.length]);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const currentAlbum = album[currentIndex];

	const getAlbumRoute = (index) => {
		switch (index) {
			case 0:
			case 1:
			case 2:
				return `album/${currentAlbum._id}`;
			default:
				return "#";
		}
	};

	if (!currentAlbum) {
		return null;
	}
	if (loading) {
		return (
			<div className="fixed inset-0 w-full h-full flex items-center justify-center">
				<InfinitySpin
					visible={true}
					width="500"
					color="#FFFFFF"
					ariaLabel="infinity-spin-loading"
				/>
			</div>
		);
	}

	return (
		<>
			<motion.div className="home relative mx-[10%] h-screen sm:h-[90vh] flex items-center mt-5">
				<AnimatePresence>
					<motion.h1
						key={currentAlbum.name}
						className="font-black w-full top-[30%] text-sm sm:text-4xl absolute text-center sm:w-full sm:top-8 z-50 sm:z-10 sm:bg-transparent bg-blue-500 px-4 rounded sm:mt-0 lg:top-4"
						variants={titleVariants}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						{currentAlbum.name}
					</motion.h1>
				</AnimatePresence>
				<motion.div className="relative w-full h-[70%] sm:h-[90%] p-3">
					<AnimatePresence custom={direction}>
						<motion.div
							key={currentAlbum.photos[0]}
							className="absolute h-full justify-end items-start left-0 w-full md:w-full md:px-[10%] lg:px-[0%] lg:left-[50%] p-4 lg:w-[50%] lg:justify-center cursor-pointer rounded overflow-hidden flex flex-col sm:px-0 px-4"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							custom={direction}
						>
							<Link to={getAlbumRoute(currentIndex)} className="relative">
								<img
									src={currentAlbum.photos[0]}
									alt={
										currentAlbum.photos[0] ||
										currentAlbum.photos[1] ||
										currentAlbum.photos[2]
									}
									className="w-full h-full object-cover border sm:border-none sm:mt-0 sm:rounded rounded-3xl"
								/>
								<div className="imageOverlay absolute inset-0 bg-black bg-opacity-20 hidden sm:flex"></div>
							</Link>
						</motion.div>
					</AnimatePresence>
					<AnimatePresence custom={direction}>
						<motion.div
							key={currentAlbum.photos[1]}
							className="blockquote absolute top-[25%] md:top-[25%] xl:top-[18%] z-10 sm:w-full md:w-full lg:w-[60%] lg:h-[50%] lg:left-[20%] cursor-pointer sm:rounded rounded-3xl overflow-hidden shadow-md left-0 w-full h-[50%] md:h-[50%] xl:h-[70%] sm:mt-0"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							custom={direction}
						>
							<Link to={getAlbumRoute(currentIndex)} className="relative">
								<img
									src={currentAlbum.photos[1]}
									alt={
										currentAlbum.photos[0] ||
										currentAlbum.photos[1] ||
										currentAlbum.photos[2]
									}
									className="w-full h-full object-cover border sm:border-none sm:mt-0 sm:rounded rounded-3xl"
								/>
								<div className="imageOverlay absolute inset-0 bg-black bg-opacity-20 hidden sm:flex"></div>
							</Link>
						</motion.div>
					</AnimatePresence>
					<AnimatePresence custom={direction}>
						<motion.div
							key={currentAlbum.photos[2]}
							className="absolute h-full justify-start items-start left-0 sm:w-full md:w-full md:px-[10%] lg:px-[0%] lg:w-[50%] lg:left-[0%] lg:justify-center cursor-pointer rounded overflow-hidden flex flex-col sm:px-0 px-4"
							variants={slideVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							custom={direction}
						>
							<Link to={getAlbumRoute(currentIndex)} className="relative">
								<img
									src={currentAlbum.photos[2]}
									alt={
										currentAlbum.photos[0] ||
										currentAlbum.photos[1] ||
										currentAlbum.photos[2]
									}
									className="w-full h-full object-cover border sm:border-none sm:mt-0 sm:rounded rounded-3xl"
								/>
								<div className="imageOverlay absolute inset-0 bg-black bg-opacity-20 hidden sm:flex"></div>
							</Link>
						</motion.div>
					</AnimatePresence>
				</motion.div>
				<button
					onClick={() => handlePrev(setCurrentIndex, setDirection, album)}
					className="prev absolute sm:-left-[8%] -left-[10%] top-[35%] md:top-[45%] transform -translate-y-1/2 bg-black text-white sm:p-2 p-1 rounded-full z-50"
				>
					<GrPrevious />
				</button>
				<button
					onClick={() => handleNext(setCurrentIndex, setDirection, album)}
					className="next absolute sm:-right-[8%] -right-[10%] top-[35%] md:top-[45%] transform -translate-y-1/2 bg-black text-white sm:p-2 p-1 rounded-full z-50"
				>
					<GrNext />
				</button>
			</motion.div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</>
	);
};

export default Home;
