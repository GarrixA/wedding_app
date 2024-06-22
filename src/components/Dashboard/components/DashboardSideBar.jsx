import React, { useState } from "react";
import { SideBarData } from "../utils/data";
import { NavLink } from "react-router-dom";
import admin_image from "../../Images/Jacaranda-Country-club-wedding-photographer-florida-venue-sonju-diana-marcos18.jpg";

function DashboardSideBar() {
	const handleLogOut = () => {
		localStorage.removeItem("token", null);
		localStorage.removeItem("admin", "");
		navigate("/login");
	};

	return (
		<div className="w-[15%] fixed h-screen left-0 shadow-xl flex flex-col">
			<div className="profile w-full rounded-full p-4 flex flex-col items-center">
				<img
					src={admin_image}
					alt="admin_profile"
					className="w-28 h-28 object-cover rounded-full p-2 bg-white"
				/>
			</div>
			<div className="links bg-white h-full">
				{SideBarData.map((item, idx) => (
					<div key={idx} className="flex flex-col gap-4 ">
						<NavLink
							to={item.href}
							onClick={() => {
								item.name === "Log out" ? handleLogOut : null;
							}}
							className={`px-4 m-2 py-4 flex gap-2 items-center hover:bg-orange-500 rounded-md`}
						>
							{item.icon}
							{item.name}
						</NavLink>
					</div>
				))}
			</div>
		</div>
	);
}

export default DashboardSideBar;
