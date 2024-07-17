import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Modal from "../Reusable/Modal";
import {
	fetchAlbumSingleImageStart,
	fetchAlbumSingleImageFailure,
	fetchAlbumSingleImageSuccess,
} from "../../redux/feature/albumImagesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { API } from "../../../utils/api";
import { InfinitySpin } from "react-loader-spinner";

const Album = () => {
	const dispatch = useAppDispatch();
	const {
		data: albumImage,
		loading,
		error,
	} = useAppSelector((state) => state.albumImage);
	const { id } = useParams();

	const fetctAlbumImages = async () => {
		dispatch(fetchAlbumSingleImageStart());
		try {
			const response = await API.get(`rubumu/get/${id}`);
			const albums_images_data = response.data.album;
			dispatch(fetchAlbumSingleImageSuccess(albums_images_data));
		} catch (error) {
			console.error("Failed to fetch albums", error);
			dispatch(fetchAlbumSingleImageFailure("Failed to fetch albums"));
		}
	};

	useEffect(() => {
		fetctAlbumImages();
	}, [dispatch]);

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
		setSelectedImageIndex(
			(prevIndex) => (prevIndex + 1) % albumImage.photos.length
		);
	};

	const prevImage = () => {
		setSelectedImageIndex(
			(prevIndex) =>
				(prevIndex - 1 + albumImage.photos.length) % albumImage.photos.length
		);
	};

	if (loading) {
		return (
			<div className="fixed inset-0 w-full h-full flex items-center justify-center pl-64">
				<InfinitySpin
					visible={true}
					width="500"
					color="#4793AF"
					ariaLabel="infinity-spin-loading"
				/>
			</div>
		);
	}

	return (
		<>
			<div className="wrapper">
				<div className="w-full h- max-w-[95%] m-auto">
					<div className="navigations_container p-2 sm:p-4 bg-white rounded-tr-xl rounded-tl-xl mt-2 sm:mt-5 shadow-xl w-full border-b">
						<div className="navigations flex space-x-10 justify-between items-center">
							<NavLink className="p-2 text-lg font-bold flex flex-col space-x-10 hover:bg-orange-500 rounded">
								{albumImage.name}
							</NavLink>
							<Link to={"/"}>
								<button className="border-2 px-4 py-0 rounded-md flex items-center gap-2">
									<IoIosArrowBack /> Back
								</button>
							</Link>
						</div>
					</div>
					<div className="albums_container bg-white h-[72vh] md:h-[80vh] pb-12 xl:pb-0 overflow-hidden">
						<div className="album_image grid sm:grid-cols-2  lg:grid-cols-4 gap-4 md:grid-cols-3 md:max-h-screen xl:max-h-[75vh]">
							{albumImage?.photos?.map((item, idx) => (
								<div className="img p-4 w-full h-96" key={idx}>
									<img
										src={item.url}
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
			<Modal
				isOpen={modalOpen}
				closeModal={closeModal}
				selectedImageIndex={selectedImageIndex}
				prevImage={prevImage}
				nextImage={nextImage}
				albumImages={albumImage.photos}
			/>
		</>
	);
};

export default Album;
