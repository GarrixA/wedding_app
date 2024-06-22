import React, { useState } from "react";
import { validateEmail, validatePassword } from "../Mock/validations";
import { Link } from "react-router-dom";

export const ResetPassword = () => {
	const [email, setEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [errors, setErrors] = useState({
		email: "",
		newPassword: "",
		confirmNewPassword: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const emailError = validateEmail(email);
		if (emailError) {
			setErrors({ email: emailError, newPassword: "", confirmNewPassword: "" });
			return;
		}

		const newPasswordError = validatePassword(newPassword);
		if (newPasswordError) {
			setErrors({
				email: "",
				newPassword: newPasswordError,
				confirmNewPassword: "",
			});
			return;
		}

		const confirmNewPasswordError =
			confirmNewPassword !== newPassword ? "Passwords do not match" : "";
		if (confirmNewPasswordError) {
			setErrors({
				email: "",
				newPassword: "",
				confirmNewPassword: confirmNewPasswordError,
			});
			return;
		}

		setErrors({ email: "", newPassword: "", confirmNewPassword: "" });
		// Add your password reset logic here
	};

	return (
		<div className="flex items-center justify-center w-full h-screen bg-[#4793af] text-black">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
				<h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Insert your email"
							className={`mt-1 block w-full px-3 py-2 bg-white border ${
								errors.email ? "border-red-500" : "border-gray-300"
							} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
						/>
						{errors.email && (
							<p className="text-red-500 text-sm mt-1">{errors.email}</p>
						)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="newPassword"
							className="block text-sm font-medium text-gray-700"
						>
							New password
						</label>
						<input
							type="password"
							id="newPassword"
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
							placeholder="Insert your new password"
							className={`mt-1 block w-full px-3 py-2 bg-white border ${
								errors.newPassword ? "border-red-500" : "border-gray-300"
							} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
						/>
						{errors.newPassword && (
							<p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
						)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="confirmNewPassword"
							className="block text-sm font-medium text-gray-700"
						>
							Confirm new password
						</label>
						<input
							type="password"
							id="confirmNewPassword"
							value={confirmNewPassword}
							onChange={(e) => setConfirmNewPassword(e.target.value)}
							placeholder="Insert your new password"
							className={`mt-1 block w-full px-3 py-2 bg-white border ${
								errors.confirmNewPassword ? "border-red-500" : "border-gray-300"
							} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
						/>
						{errors.confirmNewPassword && (
							<p className="text-red-500 text-sm mt-1">
								{errors.confirmNewPassword}
							</p>
						)}
					</div>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md transition duration-200 cursor-pointer"
					>
						Reset Password
					</button>
				</form>
				<div className="mt-4 text-center">
					<p className="text-sm">
						Remember your password?{" "}
						<Link to={"/login"}>
							<span className="text-indigo-600">Login</span>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
