import React from "react";
import { Link } from "react-router-dom";

const Nopage = () => {
	return (
		<div className="text-7xl fixed inset-0 w-full h-full font-bold flex items-center justify-center">
			Page not found
			<Link to={"/"}>
				<button className="text-sm text-blue-800 px-6 py-2 border _shadow mb-8 ml-5">
					Go home
				</button>
			</Link>
		</div>
	);
};

export default Nopage;
