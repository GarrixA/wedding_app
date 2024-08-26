import React, { useEffect } from "react";
import { SideBarData } from "../utils/data";
import { NavLink, useNavigate } from "react-router-dom";
import images from "../../../../utils/imageUtils";
import { TbLogout } from "react-icons/tb";

function DashboardSideBar() {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const adminString = localStorage.getItem("user");
	const user = adminString ? JSON.parse(adminString) : null;

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	}, [token, navigate]);

	const handleLogOut = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		navigate("/login");
	};

	return (
		<div className="w-[15%] fixed h-screen left-0 shadow-xl lg:flex flex-col hidden">
			<div className="profile w-full rounded-full p-4 flex flex-col items-center">
				<img
					src={images.adminImage1}
					alt="admin_profile"
					className="w-24 h-24 object-cover rounded-full p-2 bg-white"
				/>
			</div>
			<div className="links bg-white h-full">
				{SideBarData.map((item, idx) => (
					<div key={idx} className="flex flex-col gap-4">
						<NavLink
							to={item.href}
							end
							className={({ isActive }) =>
								`px-4 m-2 py-4 flex gap-2 items-center rounded-md ${
									isActive
										? "bg-[#4793AF] text-white"
										: "hover:bg-[#4793AF] hover:text-white"
								}`
							}
						>
							{item.icon}
							{item.name}
						</NavLink>
					</div>
				))}
				<div className="flex flex-col gap-4 cursor-pointer">
					<button
						onClick={handleLogOut}
						className="px-4 m-2 py-4 flex gap-2 items-center hover:bg-[#4793AF] hover:text-white rounded-md"
					>
						<TbLogout />
						Logout
					</button>
				</div>
			</div>
		</div>
	);
}

export default DashboardSideBar;
