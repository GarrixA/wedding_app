import { Route, Routes, useLocation } from "react-router-dom";
import DashboardLayout from "./components/Dashboard/layout/DashboardLayout";
import AdminTestimony from "./components/Dashboard/pages/AdminTestimony";
import Albums from "./components/Dashboard/pages/Albums";
import Dashboard from "./components/Dashboard/pages/Dashboard";
import Photoes from "./components/Dashboard/pages/Photoes";
import Album from "./components/Elements/Album";
import Home from "./components/Elements/Home";
import { Login } from "./components/Elements/Login";
import { Story } from "./components/Elements/Story";
import Testimonies from "./components/Elements/Testimonies";
import Layout from "./components/Reusable/Layout";
import Nopage from "./components/Reusable/Nopage";

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
						<Route path="/album/:id" element={<Album />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<DashboardLayout />}>
						<Route index path="" element={<Dashboard />} />
						<Route path="photoes" element={<Photoes />} />
						<Route path="testimonies" element={<AdminTestimony />} />
						<Route path="albums" element={<Albums />} />
					</Route>
					<Route path="*" element={<Nopage />}></Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
