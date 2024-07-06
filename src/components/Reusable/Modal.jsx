import React from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Modal = ({
	isOpen,
	closeModal,
	selectedImageIndex,
	prevImage,
	nextImage,
	albumImages,
}) => {
	if (!isOpen) return null;

	return (
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
						<IoIosArrowBack
							className="prev cursor-pointer text-4xl mr-20 bottom-10 sm:bottom-0 lg:top-1/2 lg:left-20 m-0 text-blue-700 absolute z-20 rounded-full text-center bg-[#DFF6FF]"
							onClick={prevImage}
						/>
						<img
							src={albumImages[selectedImageIndex]?.url}
							alt="modal"
							className="w-full h-full object-contain"
						/>
						<IoIosArrowForward
							className="next cursor-pointer text-4xl bottom-10 sm:bottom-0 lg:top-1/2 lg:right-20 m-0 text-blue-700 ml-20 absolute z-20 rounded-full text-center bg-[#DFF6FF]"
							onClick={nextImage}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
