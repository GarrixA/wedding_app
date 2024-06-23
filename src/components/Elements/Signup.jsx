import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
	validateEmail,
	validatePassword,
	validateConfirmPassword,
} from "../Mock/validations";

export const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const emailError = validateEmail(email);
		const passwordError = validatePassword(password);
		const confirmPasswordError = validateConfirmPassword(
			password,
			confirmPassword
		);
		if (emailError || passwordError || confirmPasswordError) {
			setErrors({
				email: emailError,
				password: passwordError,
				confirmPassword: confirmPasswordError,
			});
		} else {
			setErrors({ email: "", password: "", confirmPassword: "" });
		}
	};

	return (
		<div className="flex items-center justify-center w-full h-screen bg-[#4793af] text-black">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
				<h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
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
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Insert your password"
							className={`mt-1 block w-full px-3 py-2 bg-white border ${
								errors.password ? "border-red-500" : "border-gray-300"
							} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
						/>
						{errors.password && (
							<p className="text-red-500 text-sm mt-1">{errors.password}</p>
						)}
					</div>
					<div className="mb-6">
						<label
							htmlFor="confirmPassword"
							className="block text-sm font-medium text-gray-700"
						>
							Confirm Password
						</label>
						<input
							type="password"
							id="confirmPassword"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="Confirm your password"
							className={`mt-1 block w-full px-3 py-2 bg-white border ${
								errors.confirmPassword ? "border-red-500" : "border-gray-300"
							} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
						/>
						{errors.confirmPassword && (
							<p className="text-red-500 text-sm mt-1">
								{errors.confirmPassword}
							</p>
						)}
					</div>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md transition duration-200"
					>
						Sign Up
					</button>
				</form>
				<div className="mt-4 text-center">
					<p className="text-sm">
						Already have an account?{" "}
						<Link to={"/login"}>
							{" "}
							<p className="text-indigo-600 cursor-pointer">Login</p>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
