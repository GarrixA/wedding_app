import { jwtDecode } from "jwt-decode";

export const userInfo = (token) => {
	try {
		const decoded = jwtDecode(token);
		return decoded;
	} catch (error) {
		console.error("Invalid token:", error);
		return null;
	}
};
