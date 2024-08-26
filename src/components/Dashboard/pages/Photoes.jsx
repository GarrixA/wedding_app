import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { API } from "../../../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdAlert } from "react-icons/io";
import { InfinitySpin } from "react-loader-spinner";

const Photoes = () => {
	const [photos, setPhotos] = useState([]);
	const [albums, setAlbums] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [formModal, setFormModal] = useState(false);
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [selectedAlbum, setSelectedAlbum] = useState("");
	const [deleteModal, setDeleteModal] = useState(false);
	const [deleteAlbumId, setDeleteAlbumId] = useState(null);

	const toggleDeleteModal = (id) => {
		setDeleteAlbumId(id);
		setDeleteModal(!deleteModal);
	};

	const [load, setLoad] = useState(false);
	const token = localStorage.getItem("token");

	const fetchPhotos = async () => {
		setLoad(true);
		try {
			const response = await API.get("photo/all");
			setPhotos(response.data.photos);
			setLoad(false);
		} catch (error) {
			toast.error(error?.response?.data.message);
			setLoad(false);
		}
	};

	const fetchAlbums = async () => {
		try {
			const response = await API.get("rubumu/all");
			setAlbums(response.data.allalbums);
		} catch (error) {
			toast.error(error?.response?.data.message);
		}
	};

	const addPhotoToAlbum = async (e) => {
		e.preventDefault();

		if (!selectedFiles.length || !selectedAlbum) {
			toast.error("Please select files and an album.");
			return;
		}

		const formData = new FormData();
		for (let file of selectedFiles) {
			formData.append("images", file);
		}
		formData.append("albumId", selectedAlbum);

		try {
			const response = await API.post(`photo/add/${selectedAlbum}`, formData, {
				headers: {
					Authorization: `${token}`,
					"Content-Type": "multipart/form-data",
				},
			});
			toast.success(response.data.message);
			setAlbums((prevAlbums) => {
				return prevAlbums.map((album) =>
					album._id === selectedAlbum
						? { ...album, photos: [...album.photos, ...response.data.photos] }
						: album
				);
			});
			toggleFormModal();
			fetchPhotos();
		} catch (error) {
			toast.error(error?.response?.data.message);
		}
	};

	useEffect(() => {
		fetchPhotos();
		fetchAlbums();
	}, []);

	const deletePhoto = async (id) => {
		setLoad(true);
		try {
			const response = await API.delete(`photo/delete/${id}`, {
				headers: {
					Authorization: `${token}`,
				},
			});
			toast.success(response.data.message);
			setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo._id !== id));
			closeModal();
			setLoad(false);
		} catch (error) {
			console.log(error);
			toast.error(error.message);
			setLoad(false);
		}
	};

	const openModal = (imageSrc) => {
		setSelectedImage(imageSrc);
		setModalOpen(true);
	};

	const closeModal = () => {
		setSelectedImage(null);
		setModalOpen(false);
	};

	const toggleFormModal = () => {
		setFormModal(!formModal);
	};

	const handleFileChange = (e) => {
		setSelectedFiles([...e.target.files]);
	};

	const handleAlbumChange = (e) => {
		setSelectedAlbum(e.target.value);
	};

	const title = [{ name: "Photos" }];

	return (
		<>
			<div className="w-full h-full max-w-[95%] m-auto">
				<div className="navigations_container bg-white rounded-tr-xl rounded-tl-xl mt-5 shadow-xl w-full border-b">
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
					<div className="album_image grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[70vh] mt-2">
						{load ? (
							<div className="fixed inset-0 w-full h-full flex items-center justify-center ml-64">
								<InfinitySpin
									visible={true}
									width="500"
									color="#4793AF"
									ariaLabel="infinity-spin-loading"
								/>
							</div>
						) : (
							<>
								{photos.map((item, idx) => (
									<div className="img p-4 w-full h-96" key={idx}>
										<img
											src={item.url}
											alt="image"
											className="w-full h-full object-cover _shadow _image_hover cursor-pointer"
											onClick={() => openModal(item.url)}
										/>
										{modalOpen && selectedImage === item.url && (
											<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
												<div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
												<div className="modal-container bg-white w-[70%] mx-auto rounded shadow-lg z-50 overflow-y-auto">
													<div className="actions flex flex-col gap-4 p-2 rounded-lg _shadow bg-[#ffffff] absolute right-[15%] top-[50%]">
														<MdDelete
															className="text-2xl _actions text-red-800 cursor-pointer"
															onClick={() => toggleDeleteModal()}
														/>
													</div>
													{deleteModal && deleteAlbumId === item.id && (
														<div className="fixed w-full h-full bg-black/10 inset-0 flex justify-center items-center">
															<div className="alert w-3/4 sm:w-1/2 md:w-2/5 lg:w-4/12 xl:h-1/4 h-1/5 bg-white flex flex-col gap-2 py-4">
																<h1 className=" flex items-center text-center text-xl font-semibold justify-center gap-2">
																	<IoMdAlert className="text-3xl text-[#ffcc65]" />
																	Delete photo
																</h1>
																<h1 className="p-2 text-[1rem] font-semibold text-center">
																	Are you sure you want to delete this?
																</h1>
																<div className="buttons flex items-center justify-center gap-4 h-full">
																	<button
																		className="text-xl flex items-center justify-center font-semibold bg-blue-700 rounded text-white px-6 py-1"
																		onClick={() => deletePhoto(item._id)}
																	>
																		{load ? "Deleting..." : "Yes"}
																	</button>
																	<button
																		className="text-xl font-semibold border border-green-700 rounded px-4 py-1"
																		onClick={() => toggleDeleteModal(null)}
																	>
																		No
																	</button>
																</div>
															</div>
														</div>
													)}
													<div className="modal-content py-4 text-left px-6">
														<span
															className="modal-close cursor-pointer absolute top-0 right-0 p-4"
															onClick={closeModal}
														>
															<IoClose className="text-4xl lg:text-7xl bg-white rounded-full _close" />
														</span>
														<div className="modal-body p-4">
															<img
																src={selectedImage}
																alt="modal"
																className="w-full"
															/>
														</div>
													</div>
												</div>
											</div>
										)}
									</div>
								))}
							</>
						)}
					</div>
					<button
						className="absolute right-8 -top-10 mt-1 bg-[#4793af] px-4 py-1 text-sm rounded-sm font-semibold text-white"
						onClick={toggleFormModal}
					>
						Add photo
					</button>
				</div>
			</div>
			{formModal && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div
						className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
						onClick={toggleFormModal}
					></div>
					<div className="modal-container bg-white w-4/5 md:w-[40%] mx-auto rounded shadow-lg z-50 overflow-y-auto">
						<div className="modal-content py-4 text-left px-6">
							<span
								className="modal-close cursor-pointer absolute top-0 right-0 p-4"
								onClick={toggleFormModal}
							>
								<IoClose className="text-4xl bg-white rounded-full _close" />
							</span>
							<div className="modal-body p-4 flex flex-col gap-2 text-lg font-semibold">
								<h1 className="text-center">Add photo</h1>
								<form
									className="flex flex-col gap-2"
									onSubmit={addPhotoToAlbum}
								>
									<label> Photo</label>
									<input
										type="file"
										onChange={handleFileChange}
										className="bg-white rounded p-2 border-2 cursor-pointer"
										multiple
									/>
									<label> Album</label>
									<select
										className="bg-white py-2 border rounded"
										onChange={handleAlbumChange}
									>
										<option value="">Choose album</option>
										{albums.map((album) => (
											<option key={album._id} value={album._id}>
												{album.name}
											</option>
										))}
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

export default Photoes;
