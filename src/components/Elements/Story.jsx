import React, { useState } from "react";
import before from "../Images/Jacaranda-Country-club-wedding-photographer-florida-venue-sonju-diana-marcos31.jpg";
import after from "../Images/Jacaranda-Country-club-wedding-photographer-florida-venue-sonju-diana-marcos30.jpg";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export const Story = () => {
	const [visibleSection, setVisibleSection] = useState("before");

	return (
		<>
			<div className="wrapper h-[100vh]">
				<div className="parent_container sm:max-w-[80%] sm:mx-[10%] bg-white text-black m-6 mt-10 rounded overflow-hidden h-[78vh]">
					<div className="text-2xl font-bold text-center p-2 bg-[#40679E] text-white relative">
						Our story <Link to={"/"}>
								<button className="border-2 px-1 lg:px-4 py-0 rounded-md flex items-center text-sm lg:text-lg lg:gap-2 absolute lg:right-2 top-2 text-white">
									<IoIosArrowBack /> Back
								</button>
							</Link>
					</div>
					<div className="flex flex-col md:flex-row md:gap-10 p-6 ">
						<div className="options flex flex-row md:flex-col lg:w-[27%] sm:py-6 gap-4">
							<div
								className="before sm:w-full tec:w-[50%] sum:w-[20%] flex flex-1 items-center justify-center cursor-pointer "
								onClick={() => setVisibleSection("before")}
							>
								<div className="before_marriage relative  sm:h-56 flex flex-col items-center justify-center sm:p-0 p-5 tec:p-2">
									<h1 className="absolute text-center text-white text-sm leading-[12px] tec:text-[10px] ite:text-[12px] sum:text-sm lg:text-xl font-bold bg-[#40679E] sm:px-2 tec:px-0 w-[60%] tec:w-[80%] rounded">
										Our story before marriage
									</h1>
									<img
										src={before}
										alt="image_before"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>

							<div
								className="after sm:w-full tec:w-[50%] sum:w-[20%] flex flex-1 items-center justify-center cursor-pointer "
								onClick={() => setVisibleSection("after")}
							>
								<div className="after_marriage relative  sm:h-56 flex flex-col items-center justify-center sm:p-0 p-5 tec:p-2">
									<h1 className="absolute text-center text-white text-sm leading-[12px] tec:text-[10px] ite:text-[12px] sum:text-sm lg:text-xl font-bold bg-[#40679E] sm:px-2 tec:px-0 w-[60%] tec:w-[80%] rounded">
										Our story after marriage
									</h1>
									<img
										src={after}
										alt="image_after"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
						</div>
						{visibleSection === "before" && (
							<div className="story_before md:w-[73%]">
								<div className="single_paragraph flex flex-col  bg-white text-black my-6 tec:pb-20 ite:pb-28 sum:pb-44 sm:pb-72 md:pb-0 rounded h-[40vh] md:h-[62vh] ">
									<h2 className="text-xl italic font-bold">How They Met</h2>
									<p>
										It was a sunny afternoon in June when Fatma first laid eyes
										on Isaac. She was at her favorite café, tucked away in the
										corner with a book and a cup of her usual coffee. As she
										turned a page, the bell above the door chimed, signaling a
										new arrival. Glancing up, she saw him—a tall, handsome man
										with an easy smile that seemed to light up the room. He
										walked to the counter, and as he waited for his order, their
										eyes met. It was just a brief moment, but Fatma felt a
										flutter in her heart.
									</p>
									<p>
										Isaac had no idea that his life was about to change when he
										walked into that café. He had just finished a long day at
										work and decided to stop by for a quick coffee. As he
										entered, he noticed a woman sitting by the window, engrossed
										in her book. There was something captivating about her
										perhaps it was the way her eyes sparkled with curiosity or
										the serene expression on her face. As he stood at the
										counter, waiting for his drink, he couldn't help but steal
										glances in her direction. When their eyes met, he felt a
										jolt, like electricity.
									</p>
									<h2 className="text-xl italic font-bold">First Impression</h2>
									<p>
										Fatma's first impression of Isaac was that he had a kind
										aura. He seemed approachable and genuine, with a sense of
										calm that drew her in. When he walked over and asked if the
										seat opposite her was taken, she felt an inexplicable sense
										of familiarity, as if they had known each other for years.
										Their conversation flowed effortlessly, and by the time they
										parted ways, Fatma couldn't stop thinking about him. She
										found herself smiling at the memory of his laughter and the
										way his eyes crinkled when he smiled.
									</p>
									<p>
										Isaac's first impression of Fatma was that she was
										incredibly graceful and intelligent. Her smile was warm and
										inviting, and he felt an immediate connection. When he asked
										if he could join her, he half-expected her to decline, but
										to his delight, she welcomed him with that beautiful smile.
										They talked for hours, about everything and nothing, losing
										track of time. Isaac was struck by her wit, her passion for
										life, and the gentle way she carried herself. He left the
										café that day feeling like he had just met someone
										extraordinary.
									</p>

									<h2 className="text-xl italic font-bold">
										Vision of the Future
									</h2>
									<p>
										In twenty years, Fatma sees herself and Isaac living in a
										quaint house surrounded by a garden full of flowers. She
										imagines lazy Sunday mornings, sipping coffee on the porch
										while their children play in the yard. She dreams of
										traveling the world together, exploring new cultures and
										collecting memories. Fatma believes that their love will
										only grow stronger with time, anchored by mutual respect and
										a deep, unwavering bond. She sees them as partners in every
										sense—supporting each other's dreams, weathering life's
										storms together, and creating a legacy of love and happiness
										for their family.
									</p>
									<p>
										In twenty years, Isaac sees himself and Fatma growing old
										together, their love deepening with each passing day. He
										envisions a home filled with laughter, love, and the
										pitter-patter of tiny feet. He dreams of teaching their
										children the values they both hold dear and watching them
										grow into kind, compassionate individuals. Isaac sees
										countless adventures ahead—hiking trips, beach vacations,
										and quiet evenings spent reading together. Most importantly,
										he imagines a life where they continue to inspire and
										support each other, facing every challenge side by side and
										celebrating each triumph together. He knows that with Fatma,
										the future is bright and full of endless possibilities.
									</p>
									<h2 className="text-xl italic font-bold">Together</h2>
									<p>
										As Fatma and Isaac stand on the brink of their new journey
										as husband and wife, they are filled with hope and
										excitement. They have faced many ups and downs, but their
										love has always been their guiding light. They are ready to
										build a life together, grounded in love, trust, and a shared
										vision for the future. In twenty years, they know they will
										look back on this day with fondness, grateful for the love
										that brought them together and the incredible journey that
										lies ahead.
									</p>
								</div>
							</div>
						)}
						{visibleSection === "after" && (
							<div className="story_after w-60%">
								<div className="single_paragraph flex flex-col  bg-white text-black my-6 rounded overflow-hidden h-[65vh] overflow-y-auto">
									<h2 className="text-xl italic font-bold">Coming soon...</h2>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
