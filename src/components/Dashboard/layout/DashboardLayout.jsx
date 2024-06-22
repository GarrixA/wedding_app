import React from "react";
import DashboardSideBar from "../components/DashboardSideBar";
import DashboardNavBar from "../components/DashboardNavBar";
import { Outlet } from "react-router-dom";
import DashboardRightSide from "../components/DashboardRightSide";

function DashboardLayout() {
	return (
		<>
			<DashboardSideBar />
			<DashboardRightSide />
		</>
	);
}

export default DashboardLayout;
