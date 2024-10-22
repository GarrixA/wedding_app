import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { RiAddCircleLine } from "react-icons/ri";
import { API } from "../../../utils/api";
import {
	addTestimonyFailure,
	addTestimonyStart,
	addTestimonySuccess,
	getTestimonyFailure,
	getTestimonyStart,
	getTestimonySuccess,
} from "../../redux/feature/testimonySlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import images from '../../../utils/imageUtils'
import { InfinitySpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Testimonies = () => {
	const [openModel, setOpenModel] = useState(false);
	const dispatch = useAppDispatch();
	const {
		data: testimony,
		loading,
		error,
	} = useAppSelector((state) => state.testimony);

	const addTestimony = async (data) => {
		dispatch(addTestimonyStart());
		try {
			const response = await API.post("testimony/add", data);
			const testimony = response.data;
			dispatch(addTestimonySuccess(testimony));
			await getTestimony();
			setOpenModel(false);
			toast.success(response.data.message);
			reset()
		} catch (error) {
			console.error("Failed to add testimony", error);
			dispatch(addTestimonyFailure("Failed to add testimony"));
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
		if (!testimony) {
			getTestimony();
		}
	}, [dispatch, testimony]);

	const validTestimony = (text) => {
		const wordCount = text.trim().split(/\s+/).length;
		return wordCount >= 0 || "Testimony must be at least 10 words";
	};

	const handleModel = () => {
		setOpenModel(!openModel);
	};

	const form = useForm();
	const { register,reset, handleSubmit, formState } = form;
	const { errors } = formState;
	return (
		<>
			<div className="wrapper h-[100vh]">
				<div className="testimonies  flex justify-between mx-[10%] py-8 lg:flex-row flex-col bg-[#dff5ff] lg:mt-0">
					<div className="left_testimonial rounded overflow-hidden flex-1 relative lg:max-h-[70vh]">
						<div className="add_testimonial p-5 absolute w-full h-full flex items-center justify-center z-40">
							<div className="add text-white flex flex-col items-center">
								<h1 className="-2xl font-bold">Add testimony</h1>
								<RiAddCircleLine
									className="w-24 h-24 cursor-pointer"
									onClick={handleModel}
								/>
							</div>
						</div>
						<div className="port absolute w-full h-full bg-black opacity-30"></div>
						<img
							src={images.adminImage1}
							alt="image"
							className="w-full object-cover h-40 md:h-80 lg:h-full"
						/>
					</div>
					<div className="right_testimonial flex-1 bg-white rounded-r overflow-hidden">
						<h1 className="text-center text-lg lg:text-xl font-bold bg-[#40679E] p-2 relative">
							{testimony?.length} Testimonies <Link to={"/"}>
								<button className="border-2 px-1 lg:px-4 py-0 rounded-md flex items-center text-sm lg:text-lg lg:gap-2 absolute lg:right-2 top-2 text-white">
									<IoIosArrowBack /> Back
								</button>
							</Link>
						</h1>
						<div className="testimony text-black p-4 flex flex-col gap-4 max-h-[35vh] md:max-h-[45vh] lg:max-h-[60vh] overflow-y-auto h-full">
							{loading ? (
								<div className=" w-full h-full flex items-center justify-end ml-36">
									<InfinitySpin
										visible={true}
										width="500"
										color="#4793AF"
										ariaLabel="infinity-spin-loading"
									/>
								</div>
							) : (
								<>
									{Array.isArray(testimony) &&
										testimony?.map((one, index) => (
											<h1 key={index}>
												"{one.testimony}" by{" "}
												<span className="font-bold">{one.name}</span>
											</h1>
										))}
								</>
							)}
						</div>
					</div>
					{openModel && (
						<div className="modal rounded shadow-lg fixed inset-0 w-full h-full -top-10 z-50 flex flex-col items-center justify-center">
							<div
								className="port absolute w-full h-full bg-transparent backdrop-filter backdrop-blur-lg mt-20"
								onClick={handleModel}
							></div>
							<div className="sm:w-[70%] md:w-[60%] lg:w-[50%] w-[90%] absolute -mt-[80%] sm:-mt-[30%] md:-mt-[40%] lg:-mt-[20%] p-5 flex flex-col items-center">
								<form
									onSubmit={handleSubmit(addTestimony)}
									noValidate
									className="flex flex-col gap-4 w-full z-50 absolute bg-[#4793af] p-5 px-10 pb-10 md:px-24 md:pb-10 rounded-xl shadow-xl"
								>
									<h2 className="sm:text-xl text-sm font-bold mb-4 text-center">
										Submit your Testimony
									</h2>
									<input
										type="text"
										placeholder="Name"
										{...register("name", { required: "name is required" })}
										className="border p-2 rounded bg-white text-black"
									/>
									<p className="text-red-500">{errors.name?.message}</p>
									<textarea
										placeholder="Your Testimony"
										{...register("testimony", {
											required: "Testmony is required",
											validate: validTestimony,
										})}
										className="border p-2 rounded bg-white md:max-h-36 h-36 text-black"
									/>
									{errors.testimony && (
										<div className="text-red-500">
											Testimony must be atleast 10 words
										</div>
									)}
									<button
										type="submit"
										className="bg-[#40679e] text-white p-2 rounded"
									>
										{loading ? "Submitting..." : "Submit"}
									</button>
								</form>
							</div>
						</div>
					)}
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

export default Testimonies;
