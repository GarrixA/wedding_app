export const validateForm = (name, testimonial) => {
	let errors = {
		nameError: "",
		testimonialError: "",
	};
	let isValid = true;

	if (!name) {
		errors.nameError = "Name is missing";
		isValid = false;
	}

	if (!testimonial) {
		errors.testimonialError = "Testimony is missing";
		isValid = false;
	} else if (testimonial.split(" ").length < 10) {
		errors.testimonialError = "Provide atleast 10 words of testimony";
		isValid = false;
	}

	return { errors, isValid };
};

export const validateEmail = (email) => {
	return email ? "" : "Email is required";
};

export const validatePassword = (password) => {
	const regex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{6,}$/;
	if (!password) return "Password is required";
	if (!regex.test(password))
		return "Password must be at least 6 characters long, contain an uppercase letter, and a special character";
	return "";
};

export const validateConfirmPassword = (password, confirmPassword) => {
	return password === confirmPassword ? "" : "Passwords do not match";
};
