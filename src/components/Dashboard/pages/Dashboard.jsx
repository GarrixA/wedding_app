import { FaImages } from "react-icons/fa";
import { FaSwatchbook } from "react-icons/fa";
import { BiSolidPhotoAlbum } from "react-icons/bi";

function Dashboard() {
	return (
		<>
			<div className="parent_container bg-white max-w-[90%] m-auto mt-20 rounded-lg">
				<div className="wrapper grid gap-4 lg:grid-cols-3 md:grid-cols-2  w-full p-4">
					<div className="card bg-[#4793af] flex flex-col rounded-md text-2xl space-y-4 p-4 _shadow">
						<div className="image flex gap-2 items-center ">
							<FaImages /> Images
						</div>
						<div className="number font-bold text-white">
							<h1>120</h1>
						</div>
					</div>
					<div className="card bg-[#4793af] flex flex-col rounded-md text-2xl space-y-4 p-4 _shadow">
						<div className="image flex gap-2 items-center ">
							<BiSolidPhotoAlbum /> Albums
						</div>
						<div className="number font-bold text-white">
							<h1>120</h1>
						</div>
					</div>
					<div className="card bg-[#4793af] flex flex-col rounded-md text-2xl space-y-4 p-4 _shadow">
						<div className="image flex gap-2 items-center ">
							<FaSwatchbook /> Testimonies
						</div>
						<div className="number font-bold text-white">
							<h1>120</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
