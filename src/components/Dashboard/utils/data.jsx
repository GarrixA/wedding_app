import { MdDashboard } from "react-icons/md";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { FaSwatchbook } from "react-icons/fa6";
import { FaImages } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

import image1 from "../../Images/Jacaranda-Country-club-wedding-photographer-florida-venue-sonju-diana-marcos12.jpg";
import image2 from "../../Images/Jacaranda-Country-club-wedding-photographer-florida-venue-sonju-diana-marcos14.jpg";
import image3 from "../../Images/Jacaranda-Country-club-wedding-photographer-florida-venue-sonju-diana-marcos15.jpg";
import image4 from "../../Images/Jacaranda-Country-club-wedding-photographer-florida-venue-sonju-diana-marcos18.jpg";
import image5 from "../../Images/Jacaranda-Country-club-wedding-photographer-florida-venue-sonju-diana-marcos25.jpg";
import image6 from "../../Images/Jacaranda-Country-club-wedding-photographer-florida-venue-sonju-diana-marcos19.jpg";
import image7 from "../../Images/Jacaranda-Country-club-wedding-photographer-florida-venue-sonju-diana-marcos26.jpg";
import image8 from "../../Images/Jacaranda-Country-club-wedding-photographer-florida-venue-sonju-diana-marcos43.jpg";

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
		icon: <TbLogout />,
		name: "Logout",
	},
];

export const Images = [
	{ image: image1 },
	{ image: image2 },
	{ image: image3 },
	{ image: image4 },
	{ image: image5 },
	{ image: image6 },
	{ image: image7 },
	{ image: image8 },
	{ image: image1 },
	{ image: image2 },
	{ image: image3 },
	{ image: image4 },
	{ image: image5 },
	{ image: image6 },
	{ image: image7 },
	{ image: image8 },
];
