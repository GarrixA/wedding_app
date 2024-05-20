import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Reusable/Layout";
import Home from "./components/Elements/Home";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
