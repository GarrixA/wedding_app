import { useState } from "react";
import image from "../Images/Jacaranda-Country-club-wedding-photographer-florida-venue-sonju-diana-marcos30.jpg";
import { RiAddCircleLine } from "react-icons/ri";
import { validateForm } from "../Mock/validations";

const Testimonies = () => {
	const [openModel, setOpenModel] = useState(false);
	const [name, setName] = useState("");
	const [testimonial, setTestimonial] = useState("");
	const [nameError, setNameError] = useState("");
	const [testimonialError, setTestimonialError] = useState("");

	const handleModel = () => {
		setOpenModel(!openModel);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { errors, isValid } = validateForm(name, testimonial);

		setNameError(errors.nameError);
		setTestimonialError(errors.testimonialError);

		if (isValid) {
			console.log("Form submitted:", { name, testimonial });
			setName("");
			setTestimonial("");
			setOpenModel(false);
		}
	};

	return (
		<>
			<div className="wrapper h-[100vh]">
				<div className="testimonies  flex justify-between mx-[10%] py-8 sm:flex-row flex-col bg-[#dff5ff] lg:mt-10">
					<div className="left_testimonial rounded overflow-hidden flex-1 relative">
						<div className="add_testimonial p-5 absolute w-full h-full flex items-center justify-center z-40">
							<div className="add flex flex-col items-center">
								<h1 className=" text-2xl font-bold">Add testimonial</h1>
								<RiAddCircleLine
									className="w-24 h-24 cursor-pointer"
									onClick={handleModel}
								/>
							</div>
						</div>
						<div className="port absolute w-full h-full bg-black opacity-30"></div>
						<img
							src={image}
							alt="image"
							className="w-full object-cover h-full"
						/>
					</div>
					<div className="right_testimonial flex-1 bg-white rounded-r overflow-hidden">
						<h1 className="text-center text-xl font-bold bg-[#40679E] p-2">
							Testimonies
						</h1>
						<div className="testimony text-black p-4 flex flex-col gap-4 max-h-[70vh] overflow-y-auto h-full pb-16">
							<h1>
								"You did a wonderful job for us and I am very grateful for the
								expert input you provided in advance of the big day. We had a
								wonderful day and that is in no small part to your work. The
								Signet Library is a terrific venue and had a real ‘wow’ factor
								for our guests. In addition to that the service, food, lighting
								and indeed everything was from the very top drawer. You are an
								‘Event Designer Extraordinaire’" by{" "}
								<span className="font-bold">Mugabo</span>
							</h1>
							<h1>
								"You did a wonderful job for us and I am very grateful for the
								expert input you provided in advance of the big day. We had a
								wonderful day and that is in no small part to your work. The
								Signet Library is a terrific venue and had a real ‘wow’ factor
								for our guests. In addition to that the service, food, lighting
								and indeed everything was from the very top drawer. You are an
								‘Event Designer Extraordinaire’" by{" "}
								<span className="font-bold">Mugabo</span>
							</h1>
							<h1>
								"You did a wonderful job for us and I am very grateful for the
								expert input you provided in advance of the big day. We had a
								wonderful day and that is in no small part to your work. The
								Signet Library is a terrific venue and had a real ‘wow’ factor
								for our guests. In addition to that the service, food, lighting
								and indeed everything was from the very top drawer. You are an
								‘Event Designer Extraordinaire’" by{" "}
								<span className="font-bold">Mugabo</span>
							</h1>
							<h1>
								"You did a wonderful job for us and I am very grateful for the
								expert input you provided in advance of the big day. We had a
								wonderful day and that is in no small part to your work. The
								Signet Library is a terrific venue and had a real ‘wow’ factor
								for our guests. In addition to that the service, food, lighting
								and indeed everything was from the very top drawer. You are an
								‘Event Designer Extraordinaire’" by{" "}
								<span className="font-bold">Mugabo</span>
							</h1>
							<h1>
								"You did a wonderful job for us and I am very grateful for the
								expert input you provided in advance of the big day. We had a
								wonderful day and that is in no small part to your work. The
								Signet Library is a terrific venue and had a real ‘wow’ factor
								for our guests. In addition to that the service, food, lighting
								and indeed everything was from the very top drawer. You are an
								‘Event Designer Extraordinaire’" by{" "}
								<span className="font-bold">Mugabo</span>
							</h1>
							<h1>
								"You did a wonderful job for us and I am very grateful for the
								expert input you provided in advance of the big day. We had a
								wonderful day and that is in no small part to your work. The
								Signet Library is a terrific venue and had a real ‘wow’ factor
								for our guests. In addition to that the service, food, lighting
								and indeed everything was from the very top drawer. You are an
								‘Event Designer Extraordinaire’" by{" "}
								<span className="font-bold">Mugabo</span>
							</h1>
						</div>
					</div>
					{openModel && (
						<div className="modal rounded shadow-lg absolute w-full h-[101vh] -ml-[10%] -mt-[8%] z-50 flex flex-col items-center justify-center">
							<div
								className="port absolute w-full h-full bg-transparent backdrop-filter backdrop-blur-lg mt-20"
								onClick={handleModel}
							></div>
							<div className="sm:w-[70%] md:w-[60%] lg:w-[50%] w-[90%] absolute -mt-[120%]  ite:-mt-[110%] sum:-mt-[60%] sm:-mt-[30%] md:-mt-[40%] lg:-mt-[20%] p-5 flex flex-col items-center">
								<form
									onSubmit={handleSubmit}
									className="flex flex-col gap-4 w-full z-50 absolute bg-[#4793af] p-5 px-10 pb-10 md:px-24 md:pb-10 rounded-xl shadow-xl"
								>
									<h2 className="sm:text-xl text-sm font-bold mb-4 text-center">
										Submit your Testimony
									</h2>
									<input
										type="text"
										placeholder="Name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										className="border p-2 rounded bg-white text-black"
									/>
									{nameError && <div className="text-red-500">{nameError}</div>}
									<textarea
										placeholder="Your Testimony"
										value={testimonial}
										onChange={(e) => setTestimonial(e.target.value)}
										className="border p-2 rounded bg-white md:max-h-36 h-36 text-black"
									/>
									{testimonialError && (
										<div className="text-red-500">{testimonialError}</div>
									)}
									<button
										type="submit"
										className="bg-[#40679e] text-white p-2 rounded"
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Testimonies;
