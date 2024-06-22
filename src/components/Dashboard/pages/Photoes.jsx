import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Images } from "../utils/data";
import { IoClose } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Photoes = () => {
	const title = [{ name: "Photoes" }];

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

	const [formModal, setFormModal] = useState(false);
	const toggleFormModal = () => {
		setFormModal(!formModal);
	};

	return (
		<>
			<div className="w-full h-full max-w-[95%] m-auto">
				<div className="navigations_container p-4 bg-white rounded-tr-xl rounded-tl-xl mt-10 shadow-xl w-full border-b">
					<div className="navigations flex space-x-10">
						{title.map((item, index) => (
							<NavLink
								key={index}
								className="p-2 text-lg font-bold flex flex-col space-x-10 hover:bg-orange-500 rounded"
							>
								{item.name}
							</NavLink>
						))}
					</div>
				</div>
				<div className="albums_container bg-white flex relative">
					<div className="album_image grid grid-cols-4 gap-4 max-h-[70vh] mt-2">
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
					<button
						className="absolute right-8 -top-12 bg-[#4793af] px-4 py-1 text-xl rounded-sm font-semibold text-white"
						onClick={toggleFormModal}
					>
						Add photo
					</button>
				</div>
			</div>
			{modalOpen && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
					<div className="modal-container bg-white w-[70%] mx-auto rounded shadow-lg z-50 overflow-y-auto">
						<div className="actions flex flex-col gap-4 p-2 rounded-lg _shadow bg-[#ffffff] absolute right-[15%] top-[50%]">
							<MdEdit
								className=" text-2xl _actions text-green-500 cursor-pointer"
								onClick={toggleFormModal}
							/>
							<MdDelete className=" text-2xl _actions text-red-800 cursor-pointer" />
						</div>
						<div className="modal-content py-4 text-left px-6">
							<span
								className="modal-close cursor-pointer absolute top-0 right-0 p-4"
								onClick={closeModal}
							>
								<IoClose className="text-7xl bg-white rounded-full _close" />
							</span>
							<div className="modal-body p-4">
								<img src={selectedImage} alt="modal" className="w-full" />
							</div>
						</div>
					</div>
				</div>
			)}

			{formModal && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div
						className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
						onClick={toggleFormModal}
					></div>
					<div className="modal-container bg-white w-[40%] mx-auto rounded shadow-lg z-50 overflow-y-auto">
						<div className="modal-content py-4 text-left px-6">
							<span
								className="modal-close cursor-pointer absolute top-0 right-0 p-4"
								onClick={toggleFormModal}
							>
								<IoClose className="text-7xl bg-white rounded-full _close" />
							</span>
							<div className="modal-body p-4 flex flex-col gap-2 text-lg font-semibold">
								<h1 className="text-center">Add photo</h1>
								<form className="flex flex-col gap-2">
									<label> Photo</label>
									<input
										type="file"
										placeholder="choose a photo"
										className="bg-white rounded p-2  border-2 cursor-pointer"
									/>
									<label> Album</label>
									<select className="bg-white py-2 border rounded">
										<option>choose album</option>
										<option>Album 1</option>
										<option>Album 2</option>
										<option>Album 3</option>
									</select>

									<button
										type="submit"
										className="bg-[#4793af] rounded-sm text-white _buttons"
									>
										Add
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Photoes;
