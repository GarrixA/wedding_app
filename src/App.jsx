import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Reusable/Layout";
import Home from "./components/Elements/Home";
import Testimonies from "./components/Elements/Testimonies";
import Album from "./components/Elements/Album";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="testimonies" element={<Testimonies />} />
						<Route path="/album" element={<Album />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
