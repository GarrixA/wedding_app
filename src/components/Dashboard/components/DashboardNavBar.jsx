import admin_image from "../../Images/Jacaranda-Country-club-wedding-photographer-florida-venue-sonju-diana-marcos18.jpg";

function DashboardNavBar() {
	return (
		<div className="w-full shadow-xl py-4">
			<div className="wrapper m-auto flex items-center justify-between max-w-[90%]">
				<h1 className="text-lg font-bold">Hello admin</h1>
				<div className="profile ">
					<img
						src={admin_image}
						alt="admin_profile "
						className="w-20 h-20 rounded-full"
					/>
				</div>
			</div>
		</div>
	);
}

export default DashboardNavBar;
