import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Reusable/Layout";
import Home from "./components/Elements/Home";
import Testimonies from "./components/Elements/Testimonies";
import Album from "./components/Elements/Album";
import { Story } from "./components/Elements/Story";
import { Login } from "./components/Elements/Login";
import { Signup } from "./components/Elements/Signup";
import { ResetPassword } from "./components/Elements/ResetPassword";
import DashboardLayout from "./components/Dashboard/layout/DashboardLayout";
import Dashboard from "./components/Dashboard/pages/Dashboard";
import AdminTestimony from "./components/Dashboard/pages/AdminTestimony";
import Photoes from "./components/Dashboard/pages/Photoes";
import Albums from "./components/Dashboard/pages/Albums";

function App() {
	const location = useLocation();
	const isInRange = ["/", "/testimonies", "/album", "/story"].includes(
		location.pathname
	);
	return (
		<>
			<div className={isInRange ? "_bg_blue" : ""}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="testimonies" element={<Testimonies />} />
						<Route path="/album" element={<Album />} />
						<Route path="/story" element={<Story />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="reset-password" element={<ResetPassword />} />
					<Route path="/dashboard" element={<DashboardLayout />}>
						<Route index path="" element={<Dashboard />} />
						<Route path="photoes" element={<Photoes />} />
						<Route path="testimonies" element={<AdminTestimony />} />
						<Route path="albums" element={<Albums />} />
					</Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
