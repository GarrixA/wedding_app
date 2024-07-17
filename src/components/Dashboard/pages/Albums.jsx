import { useEffect, useState } from "react";
import { IoMdAddCircle, IoMdAlert } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { API } from "../../../../utils/api";
import {
	fetchAlbumFailure,
	fetchAlbumStart,
	fetchAlbumSuccess,
} from "../../../redux/feature/albumSlices";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import AlbumModal from "../components/AlbumModale";
import { InfinitySpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Albums() {
	const [deleteModal, setDeleteModal] = useState(false);
	const [deleteAlbumId, setDeleteAlbumId] = useState(null);

	const toggleDeleteModal = (id) => {
		setDeleteAlbumId(id);
		setDeleteModal(!deleteModal);
	};

	const [load, setLoad] = useState(false);
	const token = localStorage.getItem("token");
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
			console.error("Failed to fetch albums", error);
			dispatch(fetchAlbumFailure("Failed to fetch albums"));
		}
	};

	const deleteAlbum = async (id) => {
		setLoad(true);
		try {
			const response = await API.delete(`rubumu/delete/${id}`, {
				headers: {
					Authorization: `${token}`,
				},
			});
			setLoad(false);
			toggleDeleteModal();
			dispatch(fetchAlbumSuccess(album.filter((item) => item.id !== id)));
			toast.success(response.data.message);
		} catch (error) {
			toast.error(error.message);
			setLoad(false);
		}
	};

	useEffect(() => {
		if (!album.length) {
			fetchAlbums();
		}
	}, [dispatch, album.length]);

	const [modalOpen, setModalOpen] = useState(false);
	const [selectedAlbum, setSelectedAlbum] = useState(null);

	const openModal = (album) => {
		setSelectedAlbum(album);
		setModalOpen(true);
	};

	const closeModal = () => {
		setSelectedAlbum(null);
		setModalOpen(false);
	};

	return (
		<>
			<div className="container bg-white py-10 max-w-[95%] mt-10 rounded m-auto">
				<div className="wrapper max-w-[80%] m-auto flex flex-col gap-5 mt-5">
					<div className="top flex justify-between rounded-md px-8 w-full py-2 ml-4 font-bold text-2xl">
						<h1>{album.length} Albums </h1>
						<button
							className="flex items-center gap-2 bg-[#4793af] text-white text-sm md:text-lg py-1 px-4 rounded-md"
							onClick={() => openModal(null)}
						>
							Add <IoMdAddCircle />
						</button>
					</div>
					<div className="w-full max-h-[60vh] overflow-auto p-2">
						<div className="albums bg-white w-full flex flex-col _shadow rounded-md">
							{loading ? (
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
									{album.map((item) => (
										<div
											key={item.id}
											className="flex justify-between hover:bg-slate-300 px-8 py-4 items-center text-xl font-bold border-b"
										>
											{item.name}
											<div className="flex gap-2">
												<MdEdit
													className="text-2xl _actions text-green-500 cursor-pointer"
													onClick={() => openModal(item)}
												/>
												<MdDelete
													className="text-2xl _actions text-red-800 cursor-pointer"
													onClick={() => toggleDeleteModal(item.id)}
												/>
											</div>
											{deleteModal && deleteAlbumId === item.id && (
												<div className="fixed w-full h-full bg-black/10 inset-0 flex justify-center items-center">
													<div className="alert w-4/5 md:w-3/5 lg:w-1/4 h-1/5 bg-white flex flex-col gap-2 py-4">
														<h1 className=" flex items-center text-center text-xl font-semibold justify-center gap-2">
															<IoMdAlert className="text-3xl text-[#ffcc65]" />
															Delete Album
														</h1>
														<h1 className="p-2 text-[1rem] font-semibold">
															Are you sure you want to delete this?
														</h1>
														<div className="buttons flex items-center justify-center gap-4 h-full">
															<button
																className="text-sm md:text-xl flex items-center justify-center font-semibold bg-blue-700 rounded text-white px-6 py-1"
																onClick={() => deleteAlbum(item.id)}
															>
																{load ? "Deleting..." : "Yes"}
															</button>
															<button
																className="text-sm md:text-xl font-semibold border border-green-700 rounded px-4 py-1"
																onClick={() => toggleDeleteModal(null)}
															>
																No
															</button>
														</div>
													</div>
												</div>
											)}
										</div>
									))}
								</>
							)}
						</div>
					</div>
				</div>
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
			</div>
			<AlbumModal
				modalOpen={modalOpen}
				closeModal={closeModal}
				album={selectedAlbum}
			/>
		</>
	);
}

export default Albums;
