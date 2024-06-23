import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavBar from "./DashboardNavBar";

function DashboardRightSide() {
	return (
		<div className="w-[85%] max-h-screen fixed right-0">
			<DashboardNavBar />
			<Outlet />
		</div>
	);
}

export default DashboardRightSide;
