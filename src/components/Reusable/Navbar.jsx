import { Link } from "react-router-dom";
import { navH1Variants } from "../Mock/variants";
import { motion } from "framer-motion";
import Testimonies from "../Elements/Testimonies";

const Navbar = () => {
	return (
		<div className="main-nav flex items-center justify-between py-4 z-20 w-full px-[10%] shadow-md">
			<div className="owners">
				<Link to={"/"}>
					<motion.h1
						className="text-2xl font-extrabold"
						variants={navH1Variants}
						animate="animate"
					>
						Isaac & Fatma
					</motion.h1>
				</Link>
			</div>
			<div className="others sm:flex gap-3 hidden">
				<Link to={"/story"}>
					<h1 className=" cursor-pointer font-bold">Story</h1>
				</Link>
				<Link to={"/testimonies"}>
					<h1 className=" cursor-pointer font-bold">Testimonials</h1>
				</Link>
				<Link to={"/login"}>
					<h1 className=" cursor-pointer font-bold pl-16">Login</h1>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
