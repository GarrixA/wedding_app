import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Images } from "../Dashboard/utils/data";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack as IoIosArrowBackModal } from "react-icons/io";

const Album = () => {
	const albumNames = [{ name: "Album" }];

	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);

	const openModal = (index) => {
		setSelectedImageIndex(index);
		setModalOpen(true);
	};

	const closeModal = () => {
		setSelectedImageIndex(null);
		setModalOpen(false);
	};

	const nextImage = () => {
		setSelectedImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
	};

	const prevImage = () => {
		setSelectedImageIndex(
			(prevIndex) => (prevIndex - 1 + Images.length) % Images.length
		);
	};

	return (
		<>
			<div className="wrapper">
				<div className="w-full h- max-w-[95%] m-auto">
					<div className="navigations_container p-2 sm:p-4 bg-white rounded-tr-xl rounded-tl-xl mt-2 sm:mt-5 shadow-xl w-full border-b">
						<div className="navigations flex space-x-10 justify-between items-center">
							{albumNames.map((item, index) => (
								<NavLink
									key={index}
									className="p-2 text-lg font-bold flex flex-col space-x-10 hover:bg-orange-500 rounded"
								>
									{item.name}
								</NavLink>
							))}
							<Link to={"/"}>
								<button className="border-2 px-4 py-0 rounded-md flex items-center gap-2">
									<IoIosArrowBack /> Back
								</button>
							</Link>
						</div>
					</div>
					<div className="albums_container bg-white h-[72vh] md:h-[80vh] pb-12 xl:pb-0 overflow-hidden overflow-y-scroll">
						<div className="album_image grid sm:grid-cols-2  lg:grid-cols-4 gap-4 md:grid-cols-3 md:max-h-screen xl:max-h-[75vh]">
							{Images.map((item, idx) => (
								<div className="img p-4 w-full h-full" key={idx}>
									<img
										src={item.image}
										alt="image"
										className="w-full h-full object-cover _shadow _image_hover cursor-pointer"
										onClick={() => openModal(idx)}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			{modalOpen && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div
						className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
						onClick={closeModal}
					></div>
					<div className="modal-container w-full h-[80%] mx-auto rounded shadow-lg z-50 overflow-y-auto">
						<div className="modal-content text-left h-full w-full relative">
							<span
								className="modal-close cursor-pointer absolute top-0 right-0 p-4"
								onClick={closeModal}
							>
								<IoClose className="xl:text-5xl text-3xl text-red-500 bg-white rounded-full hover:bg-red-500 hover:text-white" />
							</span>
							<div className="modal-body p-4 h-full w-full flex items-center justify-center">
								<IoIosArrowBackModal
									className="prev cursor-pointer text-4xl mr-20 bottom-10 sm:bottom-0 lg:top-1/2 lg:left-20 m-0 text-blue-700 absolute z-20  rounded-full text-center bg-[#DFF6FF]"
									onClick={prevImage}
								/>
								<img
									src={Images[selectedImageIndex].image}
									alt="modal"
									className="w-full h-full object-contain"
								/>
								<IoIosArrowForward
									className="next cursor-pointer text-4xl bottom-10 sm:bottom-0 lg:top-1/2 lg:right-20 m-0 text-blue-700 ml-20 absolute z-20  rounded-full text-center bg-[#DFF6FF]"
									onClick={nextImage}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Album;
