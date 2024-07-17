import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../../../utils/api";
import {
	fetchAlbumFailure,
	fetchAlbumStart,
	fetchAlbumSuccess,
} from "../../../redux/feature/albumSlices";
import { useAppDispatch } from "../../../redux/hooks/hooks";

const AlbumModal = ({ modalOpen, closeModal, album }) => {
	const [loading, setLoading] = useState(false);
	const token = localStorage.getItem("token");

	const dispatch = useAppDispatch();

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
			toast.error(error?.response?.data.message);
		}
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
	} = useForm();

	useEffect(() => {
		if (album) {
			setValue("name", album.name);
			setValue("description", album.description);
		} else {
			reset();
		}
	}, [album, setValue, reset]);

	const handleAddAlbum = async (data) => {
		setLoading(true);
		try {
			const res = await API.post("rubumu/add", data, {
				headers: {
					Authorization: `${token}`,
				},
			});
			toast.success(res.data.message);
			reset();
			setLoading(false);
			setTimeout(async () => {
				closeModal();
				await fetchAlbums();
			}, 4000);
		} catch (error) {
			setLoading(false);
			toast.error(error?.response?.data.message);
		}
	};

	const handleEditAlbum = async (data) => {
		setLoading(true);
		try {
			const res = await API.patch(`rubumu/update/${album.id}`, data, {
				headers: {
					Authorization: `${token}`,
				},
			});
			toast.success(res.data.message);
			reset();
			setLoading(false);
			setTimeout(async () => {
				closeModal();
				await fetchAlbums();
			}, 4000);
		} catch (error) {
			setLoading(false);
			toast.error(error?.response?.data.message);
		}
	};

	if (!modalOpen) return null;

	const onSubmit = (data) => {
		if (album) {
			handleEditAlbum(data);
		} else {
			handleAddAlbum(data);
		}
	};

	return (
		<>
			<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 lg:hidden">
				<div
					className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
					onClick={closeModal}
				></div>
				<div className="modal-container bg-white w-4/5 md:w-[40%] mx-auto rounded shadow-lg z-50 overflow-y-auto">
					<div className="modal-content py-4 text-left px-6">
						<span
							className="modal-close cursor-pointer absolute top-0 right-0 p-4"
							onClick={closeModal}
						>
							<IoClose className="text-4xl lg:text-7xl bg-white rounded-full _close" />
						</span>
						<div className="modal-body p-4 flex flex-col gap-2 text-lg font-semibold">
							<h1 className="text-center">
								{album ? "Edit Album" : "Add Album"}
							</h1>
							<form
								className="flex flex-col gap-2"
								onSubmit={handleSubmit(onSubmit)}
							>
								<label>Album name</label>
								<input
									type="text"
									placeholder="Add album name"
									className="bg-white rounded p-2 border-2"
									{...register("name", { required: "Album name is required" })}
								/>
								{errors.name && (
									<span className="text-red-500">{errors.name.message}</span>
								)}

								<label>Album description</label>
								<input
									type="text"
									placeholder="Add album description"
									className="bg-white rounded p-2 border-2"
									{...register("description", {
										required: "Album description is required",
									})}
								/>
								{errors.description && (
									<span className="text-red-500">
										{errors.description.message}
									</span>
								)}

								<button
									type="submit"
									className="bg-[#4793af] rounded-sm text-white _buttons"
								>
									{loading
										? album
											? "Updating..."
											: "Adding..."
										: album
										? "Update"
										: "Add"}
								</button>
							</form>
						</div>
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
		</>
	);
};

export default AlbumModal;
