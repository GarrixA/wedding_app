import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API } from "../../../utils/api";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
	const form = useForm();
	const { register, control, handleSubmit, formState } = form;
	const { errors } = formState;
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const Submit = async (data) => {
		setLoading(true);
		try {
			const res = await API.post("user/logIn", data);
			const token = res.data.token;
			localStorage.setItem("token", token);
			toast.success(res.data.message);
			setLoading(false);
			setTimeout(() => {
				navigate("/dashboard");
			}, 4500);
		} catch (error) {
			setLoading(false);
			toast.error(error?.response?.data.message);
		}
	};

	return (
		<div className="flex items-center justify-center w-full h-screen bg-[#DCF1FB] text-black _shadow">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
				<h2 className="text-2xl font-bold text-center mb-6">Login</h2>
				<form onSubmit={handleSubmit(Submit)}>
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
							placeholder="Insert your email"
							{...register("email")}
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
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							placeholder="Insert your password"
							{...register("password")}
							className={`mt-1 block w-full px-3 py-2 bg-white border ${
								errors.password ? "border-red-500" : "border-gray-300"
							} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
						/>
						{errors.password && (
							<p className="text-red-500 text-sm mt-1">{errors.password}</p>
						)}
					</div>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md transition duration-200"
					>
						{loading ? "Logging..." : "Login"}
					</button>
				</form>
				<div className="mt-4 text-center">
					<Link to={"#"} className="text-indigo-600 cursor-pointer">
						Forgot password?
					</Link>
				</div>
				<div className="mt-4 text-center">
					<p className="text-sm">
						Don't have an account?{" "}
						<Link to={"# "} className="text-indigo-600 cursor-pointer">
							Sign up
						</Link>
					</p>
				</div>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</div>
	);
};
