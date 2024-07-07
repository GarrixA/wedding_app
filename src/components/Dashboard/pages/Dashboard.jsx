import { FaImages } from "react-icons/fa";
import { FaSwatchbook } from "react-icons/fa";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../../../utils/api";
import {
	getTestimonyFailure,
	getTestimonyStart,
	getTestimonySuccess,
} from "../../../redux/feature/testimonySlice";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

function Dashboard() {
	const [photos, setPhotos] = useState([]);
	const [albums, setAlbums] = useState([]);
	const dispatch = useAppDispatch();
	const {
		data: testimony,
		loading,
		error,
	} = useAppSelector((state) => state.testimony);

	const fetchPhotos = async () => {
		try {
			const response = await API.get("photo/all");
			setPhotos(response.data.photos);
		} catch (error) {
			toast.error(error?.response?.data.message);
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

	const getTestimony = async () => {
		dispatch(getTestimonyStart());
		try {
			const response = await API.get("testimony/All");
			const testimony = response.data.all_testimonys;
			dispatch(getTestimonySuccess(testimony));
		} catch (error) {
			console.error("Failed to get testimony", error);
			dispatch(getTestimonyFailure("Failed to get testimony"));
			toast.error(error?.response?.data.message);
		}
	};

	useEffect(() => {
		fetchAlbums();
		fetchPhotos();
		getTestimony();
	}, [dispatch]);

	return (
		<>
			<div className="parent_container bg-white max-w-[90%] m-auto mt-20 rounded-lg">
				<div className="wrapper grid gap-4 lg:grid-cols-3 md:grid-cols-2  w-full p-4">
					<div className="card bg-[#4793af] flex flex-col rounded-md text-2xl space-y-4 p-4 _shadow">
						<div className="image flex gap-2 items-center ">
							<FaImages /> Images
						</div>
						<div className="number font-bold text-white">
							{loading ? (
								<InfinitySpin
									visible={true}
									width="60"
									color="#FFFFFF"
									ariaLabel="infinity-spin-loading"
								/>
							) : (
								<h1>{photos?.length}</h1>
							)}
						</div>
					</div>
					<div className="card bg-[#4793af] flex flex-col rounded-md text-2xl space-y-4 p-4 _shadow">
						<div className="image flex gap-2 items-center ">
							<BiSolidPhotoAlbum /> Albums
						</div>
						<div className="number font-bold text-white">
							{loading ? (
								<InfinitySpin
									visible={true}
									width="60"
									color="#FFFFFF"
									ariaLabel="infinity-spin-loading"
								/>
							) : (
								<h1>{albums?.length}</h1>
							)}
						</div>
					</div>
					<div className="card bg-[#4793af] flex flex-col rounded-md text-2xl space-y-4 p-4 _shadow">
						<div className="image flex gap-2 items-center ">
							<FaSwatchbook /> Testimonies
						</div>
						<div className="number font-bold text-white">
							{loading ? (
								<InfinitySpin
									visible={true}
									width="60"
									color="#FFFFFF"
									ariaLabel="infinity-spin-loading"
								/>
							) : (
								<h1>{testimony?.length}</h1>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="buttons max-w-[90%] m-auto mt-20 flex items-center justify-around">
				<Link to={"/dashboard/photoes"}>
					<button className="bg-[#4793AF] _shadow px-6 py-2 rounded text-white font-bold _buttons">
						Preview images
					</button>
				</Link>
				<Link to={"/"}>
					<button className="bg-[#4793AF] _shadow px-6 py-2 rounded text-white font-bold _buttons">
						Preview albums
					</button>
				</Link>
				<Link to={"/testimonies"}>
					<button className="bg-[#4793AF] _shadow px-6 py-2 rounded text-white font-bold _buttons">
						Preview testimonies
					</button>
				</Link>
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
}

export default Dashboard;
