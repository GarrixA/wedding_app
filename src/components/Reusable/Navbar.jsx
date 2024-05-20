const Navbar = () => {
	return (
		<>
			<div className="main-nav flex items-center justify-between mx-[10%] py-10 z-20 w-full max-w-[80%]">
				<div className="owners">
					<h1 className="text-2xl font-extrabold">Aphro & ABI</h1>
				</div>
				<div className="others flex gap-3">
					<h1 className="text-blue-500 cursor-pointer font-bold">Strory</h1>
					<h1 className="text-blue-500 cursor-pointer font-bold">
						Testimonials
					</h1>
				</div>
			</div>
		</>
	);
};

export default Navbar;
