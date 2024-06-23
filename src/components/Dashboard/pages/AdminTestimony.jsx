import { MdDelete } from "react-icons/md";

function AdminTestimony() {
	const testimony = [
		{
			testimony:
				" In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
			name: "Garrix",
		},
		{
			testimony:
				" In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
			name: "Garrix",
		},
	];
	return (
		<>
			<div className="bg-white max-w-[95%] m-auto mt-10 rounded-md">
				<div className="testimony p-4 flex flex-col space-y-5">
					{testimony.map((item, idx) => (
						<div key={idx} className="_shadow rounded-md">
							<div className="flex gap-2 items-center p-4">
								<div className="div">
									<span>{item.testimony}</span> by:
									<span className="font-bold text-xl"> {item.name}</span>
								</div>

								<div className="action">
									<MdDelete className=" text-2xl _actions text-red-800 cursor-pointer" />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default AdminTestimony;
