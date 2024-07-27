import { MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { API } from "../../../../utils/api";
import {
	deleteTestimonyFailure,
	deleteTestimonyStart,
	deleteTestimonySuccess,
	getTestimonyFailure,
	getTestimonyStart,
	getTestimonySuccess,
} from "../../../redux/feature/testimonySlice";
import { IoMdAlert } from "react-icons/io";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminTestimony() {
	const token = localStorage.getItem("token");
	const [deleteModal, setDeleteModal] = useState(false);
	const toggleDeleteModal = () => {
		setDeleteModal(!deleteModal);
	};
	const {
		data: testimony,
		loading,
		error,
	} = useAppSelector((state) => state.testimony);
	const dispatch = useAppDispatch();
	const [load, setLoad] = useState(false);
	const getTestimony = async () => {
		dispatch(getTestimonyStart());
		try {
			const response = await API.get("testimony/All");
			const testimony = response?.data.all_testimonys;
			dispatch(getTestimonySuccess(testimony));
		} catch (error) {
			console.error("Failed to get testimony", error);
			dispatch(getTestimonyFailure("Failed to add testimony"));
		}
	};

	useEffect(() => {
		getTestimony();
	}, [dispatch]);

	const deleteTestimony = async (id) => {
		setLoad(true);
		dispatch(deleteTestimonyStart(id));
		try {
			await API.delete(`testimony/delete/${id}`, {
				headers: {
					Authorization: `${token}`,
				},
			});
			dispatch(deleteTestimonySuccess(id));
			toggleDeleteModal();
			setLoad(false);
			toast.success("Delete successfully");
		} catch (error) {
			console.error("Failed to delete testimony", error);
			dispatch(deleteTestimonyFailure("Failed to add testimony"));
			setLoad(false);
			toast.error(error);
		}
	};

	if (loading) {
		return (
			<div className="fixed inset-0 w-full h-full flex items-center justify-center ml-64">
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
			<div className="bg-white max-w-[95%] m-auto mt-10 rounded-md max-h-[80vh] testimony overflow-hidden overflow-y-auto">
				<div className="testimony p-4 flex flex-col space-y-5">
					{Array.isArray(testimony)
						? testimony.map((item, idx) => (
								<div key={idx} className="_shadow rounded-md">
									<div className="flex gap-2 items-center p-4">
										<div className="div">
											<span>{item.testimony}</span> by:
											<span className="font-bold text-xl"> {item.name}</span>
										</div>

										<div className="action">
											<MdDelete
												className=" text-2xl _actions text-red-800 cursor-pointer"
												onClick={() => toggleDeleteModal()}
											/>
										</div>
									</div>
									{deleteModal && (
										<div className="fixed w-full h-full bg-black/10 inset-0 flex justify-center items-center">
											<div className="alert w-4/6 sm:w-2/5 lg:w-1/4 h-1/4 bg-white flex flex-col gap-2 py-4">
												<h1 className=" flex items-center text-center text-xl font-semibold justify-center gap-2">
													{" "}
													<IoMdAlert className="text-3xl text-[#ffcc65]" />{" "}
													Delete testimony
												</h1>
												<h1 className="p-2 text-[1rem] font-semibold">
													Are you sure you want to delete this?
												</h1>
												<div className="buttons flex items-center justify-center gap-4 h-full">
													<button
														className="text-xl flex items-center justify-center font-semibold bg-blue-700 rounded text-white px-6 py-1"
														onClick={() => deleteTestimony(item._id)}
													>
														{load ? "Deleting..." : "Yes"}
													</button>
													<button
														className="text-xl font-semibold border border-green-700 rounded px-4 py-1"
														onClick={() => toggleDeleteModal()}
													>
														No
													</button>
												</div>
											</div>
										</div>
									)}
								</div>
						  ))
						: null}
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
}

export default AdminTestimony;
