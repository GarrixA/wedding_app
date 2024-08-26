import { useEffect, useState } from "react";
import images from "../../../../utils/imageUtils";
import { SlMenu } from "react-icons/sl";
import { menuVariants } from "../../../../utils/variants";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";

function DashboardNavBar() {
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};

	const navigate = useNavigate();
	const location = useLocation();
	const token = localStorage.getItem("token");
	const adminString = localStorage.getItem("user");
	const user = adminString ? JSON.parse(adminString) : null;

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	}, [token, navigate]);

	const handleLogOut = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		navigate("/login");
	};

	const getLinkClasses = (path) => {
		const baseClasses = "cursor-pointer font-bold py-2 px-4";
		const activeClasses =
			location.pathname === path ? "bg-blue-500 text-white" : "";
		return `${baseClasses} ${activeClasses}`;
	};

	return (
		<div className="w-full shadow-xl py-4">
			<div className="wrapper m-auto flex items-center justify-between max-w-[90%]">
				<h1 className="text-lg font-bold">Hello admin</h1>
				<div className="profile flex items-center space-x-8">
					<img
						src={images.adminImage2}
						alt="admin_profile"
						className="w-16 h-16 rounded-full"
					/>
					<SlMenu className="text-2xl lg:hidden" onClick={toggleModal} />
				</div>
			</div>
			<AnimatePresence>
				{modal && (
					<motion.div
						className="w-full h-full backdrop-blur inset-0 fixed flex justify-center z-[60] _shadow"
						initial="closed"
						animate="open"
						exit="closed"
						variants={menuVariants}
					>
						<div className="close absolute right-0 w-full flex justify-end px-2">
							<AiFillCloseCircle
								className="sm:text-6xl text-5xl mt-5"
								onClick={toggleModal}
							/>
						</div>
						<div className="others lg:hidden gap-3 flex flex-col bg-white h-1/2 w-4/5 sm:w-1/2 mt-24 text-xl font-semibold p-10">
							<Link
								to="/dashboard"
								className={getLinkClasses("/dashboard")}
								onClick={toggleModal}
							>
								<h1>Dashboard</h1>
							</Link>
							<Link
								to="/dashboard/albums"
								className={getLinkClasses("/dashboard/albums")}
								onClick={toggleModal}
							>
								<h1>Albums</h1>
							</Link>
							<Link
								to="/dashboard/testimonies"
								className={getLinkClasses("/dashboard/testimonies")}
								onClick={toggleModal}
							>
								<h1>Testimonies</h1>
							</Link>
							<Link
								to="/dashboard/photoes"
								className={getLinkClasses("/dashboard/photoes")}
								onClick={toggleModal}
							>
								<h1>Images</h1>
							</Link>
							<Link
								to="/dashboard/privacy"
								className={getLinkClasses("/dashboard/privacy")}
								onClick={toggleModal}
							>
								<h1>Privacy</h1>
							</Link>
							<Link onClick={handleLogOut} className={getLinkClasses("")}>
								<h1>Log out</h1>
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default DashboardNavBar;
