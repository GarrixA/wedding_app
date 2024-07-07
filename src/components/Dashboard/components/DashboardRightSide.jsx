import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import DashboardNavBar from "./DashboardNavBar";

function DashboardRightSide() {
	let auth = { token: true };

	return (
		<div className="w-[85%] max-h-screen fixed right-0">
			<DashboardNavBar />
			{auth.token ? <Outlet /> : <Navigate to={"/login"} />}
		</div>
	);
}

export default DashboardRightSide;
