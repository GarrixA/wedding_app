import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Images } from "../Dashboard/utils/data";
import { IoClose } from "react-icons/io5";

const Album = () => {
	const albumNames = [{ name: "Album " }];

	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const openModal = (imageSrc) => {
		setSelectedImage(imageSrc);
		setModalOpen(true);
	};

	const closeModal = () => {
		setSelectedImage(null);
		setModalOpen(false);
	};

	return (
		<>
			<div className="w-full h-full max-w-[95%] m-auto">
				<div className="navigations_container p-4 bg-white rounded-tr-xl rounded-tl-xl mt-5 shadow-xl w-full border-b">
					<div className="navigations flex space-x-10">
						{albumNames.map((item, index) => (
							<NavLink
								key={index}
								className="p-2 text-lg font-bold flex flex-col space-x-10 hover:bg-orange-500 rounded"
							>
								{item.name}
							</NavLink>
						))}
					</div>
				</div>
				<div className="albums_container bg-white">
					<div className="album_image grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[57.875rem] md:grid-cols-3 md:max-h-screen xl:max-h-[70vh] mt-2">
						{Images.map((item, idx) => (
							<div className="img p-4 w-full h-full" key={idx}>
								<img
									src={item.image}
									alt="image"
									className="w-full h-full object-cover _shadow _image_hover cursor-pointer"
									onClick={() => openModal(item.image)}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			{modalOpen && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div
						className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
						onClick={closeModal}
					></div>
					<div className="modal-container bg-white w-[70%] mx-auto rounded shadow-lg z-50 overflow-y-auto">
						<div className="modal-content py-4 text-left px-6">
							<span
								className="modal-close cursor-pointer absolute top-0 right-0 p-4"
								onClick={closeModal}
							>
								<IoClose className="text-7xl text-red-500 bg-white rounded-full hover:bg-red-500 hover:text-red-500" />
							</span>
							<div className="modal-body p-4">
								<img src={selectedImage} alt="modal" className="w-full" />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Album;
