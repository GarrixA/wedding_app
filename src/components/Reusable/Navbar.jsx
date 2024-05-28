import { navH1Variants } from "../Mock/variants";
import { motion } from "framer-motion";

const Navbar = () => {
	return (
		<div className="main-nav flex items-center justify-between mx-[10%] py-10 z-20 w-full max-w-[80%]">
			<div className="owners">
				<motion.h1
					className="text-2xl font-extrabold"
					variants={navH1Variants}
					animate="animate"
				>
					Isaac & Fatma
				</motion.h1>
			</div>
			<div className="others sm:flex gap-3 hidden">
				<h1 className="text-blue-500 cursor-pointer font-bold">Story</h1>
				<h1 className="text-blue-500 cursor-pointer font-bold">Testimonials</h1>
			</div>
		</div>
	);
};

export default Navbar;
