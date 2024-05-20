import React, { useState } from "react";
import wedding_data from "../Mock";

const Home = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % wedding_data.length);
	};

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + wedding_data.length) % wedding_data.length
		);
	};

	const currentAlbum = wedding_data[currentIndex];

	return (
		<>
			<div className="relative mx-[10%] h-[75vh] flex justify-center items-center">
				<h1 className="font-black text-4xl absolute text-center w-full top-2">
					{currentAlbum.album1 || currentAlbum.album2 || currentAlbum.album3}
				</h1>
				<div className="relative w-full h-full flex items-center justify-center gap-4">
					<div className="absolute left-0 w-1/3 h-full cursor-pointer">
						<img
							src={currentAlbum.image1}
							alt={
								currentAlbum.album1 ||
								currentAlbum.album2 ||
								currentAlbum.album3
							}
							className="w-full h-full object-contain"
						/>
					</div>
					<div className="relative z-10 w-1/2 h-full cursor-pointer">
						<img
							src={currentAlbum.image2}
							alt={
								currentAlbum.album1 ||
								currentAlbum.album2 ||
								currentAlbum.album3
							}
							className="w-full h-full object-contain"
						/>
					</div>
					<div className="absolute right-0 w-1/3 h-full cursor-pointer">
						<img
							src={currentAlbum.image3}
							alt={
								currentAlbum.album1 ||
								currentAlbum.album2 ||
								currentAlbum.album3
							}
							className="w-full h-full object-contain"
						/>
					</div>
				</div>
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
			</div>
		</>
	);
};

export default Home;
