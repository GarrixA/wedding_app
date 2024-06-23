import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

function Albums() {
	const [modalOpen, setModalOpen] = useState(false);
	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	const albums = [
		{
			name: "Album 1",
		},
		{
			name: "Album 2",
		},
		{
			name: "Album 3",
		},
	];
	return (
		<>
			<div className="container bg-white py-10 max-w-[95%] mt-10 rounded  m-auto">
				<div className="wrapper max-w-[80%] m-auto flex flex-col gap- mt-5">
					<div className="top flex  justify-between rounded-md px-8 w-full py-2 ml-4  font-bold text-2xl">
						<h1>Albums </h1>
						<button
							className=" flex items-center gap-2 bg-[#4793af] text-white tex-md py-1 px-4 rounded-md"
							onClick={toggleModal}
						>
							Add <IoMdAddCircle />
						</button>
					</div>
					<div className="albums bg-white w-full flex flex-col m-5 _shadow rounded-md">
						{albums.map((item) => (
							<div className="flex justify-between hover:bg-slate-300 px-8 py-4 items-center text-xl font-bold border-b">
								{item.name}{" "}
								<div className="flex gap-2 ">
									<MdEdit
										className=" text-2xl _actions text-green-500 cursor-pointer"
										onClick={toggleModal}
									/>
									<MdDelete className=" text-2xl _actions text-red-800 cursor-pointer" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{modalOpen && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
					<div
						className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
						onClick={toggleModal}
					></div>
					<div className="modal-container bg-white w-[20%] mx-auto rounded shadow-lg z-50 overflow-y-auto">
						<div className="modal-content py-4 text-left px-6">
							<span
								className="modal-close cursor-pointer absolute top-0 right-0 p-4"
								onClick={toggleModal}
							>
								<IoClose className="text-7xl bg-white rounded-full _close" />
							</span>
							<div className="modal-body p-4 flex flex-col gap-2 text-lg font-semibold">
								<h1 className="text-center">Add album</h1>
								<form className="flex flex-col gap-2">
									<label> Album name</label>
									<input
										type="text"
										placeholder="add album name"
										className="bg-white rounded p-2  border-2"
									/>
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
}

export default Albums;
