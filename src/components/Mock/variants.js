export const slideVariants = {
	initial: (direction) => ({
		x: direction > 0 ? 200 : -200,
		opacity: 0,
		scale: -1,
	}),
	animate: {
		x: 0,
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			delay: 1,
			ease: "linear",
		},
	},
	exit: (direction) => ({
		x: direction < 0 ? 200 : -500,
		opacity: 0,
		transition: {
			type: "spring",
			delay: 1,
			ease: "linear",
		},
	}),
};

export const titleVariants = {
	initial: {
		opacity: 0,
		scale: 0.5,
		x: -300,
		transition: {
			type: "spring",
			delay: 1,
			ease: "linear",
		},
	},
	animate: {
		opacity: 1,
		scale: 1,
		x: 0,
		transition: {
			type: "spring",
			delay: 1,
			ease: "linear",
		},
	},
	exit: {
		opacity: 0,
		x: -300,
		scale: 0.5,
		transition: {
			type: "spring",
			delay: 1,
			ease: "linear",
		},
	},
};

export const navH1Variants = {
	animate: {
		rotateY: [0, 360],
		transition: {
			duration: 0.4,
			ease: "linear",
			repeat: Infinity,
			repeatDelay: 15,
		},
	},
};
