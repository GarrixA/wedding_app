import { MdDashboard } from "react-icons/md";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { FaSwatchbook } from "react-icons/fa6";
import { FaImages } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";


export const SideBarData = [
	{
		icon: <MdDashboard />,
		name: "Dashboard",
		href: "/dashboard",
	},
	{
		icon: <BiSolidPhotoAlbum />,
		name: "Albums",
		href: "/dashboard/albums",
	},
	{
		icon: <FaSwatchbook />,
		name: "Testimonials",
		href: "/dashboard/testimonies",
	},
	{
		icon: <FaImages />,
		name: "Images",
		href: "/dashboard/photoes",
	},
	{
		icon: <RiLockPasswordFill />,
		name: "Privacy",
		href: "/dashboard/privacy",
	},
];
