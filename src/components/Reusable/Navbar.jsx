import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { navH1Variants } from "../Mock/variants";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { menuVariants } from "../../../utils/variants";

const Navbar = () => {
	const [menu, openMenu] = useState(false);
	const toggleMenu = () => {
		openMenu(!menu);
	};

	return (
		<div className="main-nav flex items-center relative overflow-hidden bg-[#DFF6FF] justify-between py-4 z-20 w-full px-[10%] shadow-md">
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
			<div className="menu lg:hidden text-4xl">
				<IoMenuSharp onClick={() => toggleMenu()} />
			</div>
			<AnimatePresence>
				{menu && (
					<motion.div
						className="w-full h-full  backdrop-blur inset-0 fixed flex justify-center z-[60]"
						initial="closed"
						animate="open"
						exit="closed"
						variants={menuVariants}
					>
						<div className="close absolute right-0 w-full flex justify-end px-2">
							<AiFillCloseCircle
								className="sm:text-6xl text-5xl mt-5"
								onClick={() => toggleMenu()}
							/>
						</div>
						<div className="others lg:hidden gap-3 flex flex-col bg-white h-1/2 w-4/5 sm:w-1/2 mt-24 text-xl font-semibold p-10">
							<Link to={"/"} className="_links" onClick={() => toggleMenu()}>
								<h1 className=" cursor-pointer font-bold">Home</h1>
							</Link>
							<Link
								to={"/story"}
								className="_links"
								onClick={() => toggleMenu()}
							>
								<h1 className=" cursor-pointer font-bold">Story</h1>
							</Link>
							<Link
								to={"/testimonies"}
								className="_links"
								onClick={() => toggleMenu()}
							>
								<h1 className=" cursor-pointer font-bold">Testimonials</h1>
							</Link>
							<Link
								to={"/login"}
								className="_links"
								onClick={() => toggleMenu()}
							>
								<h1 className=" cursor-pointer font-bold lg:pl-16">Login</h1>
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<div className="others lg:flex gap-3 hidden">
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
