import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../../../utils/api";
import { userInfo } from "../../../../utils/userInfo";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
	const [loading, setLoading] = useState(false);
	const token = localStorage.getItem("token");
	const user = userInfo(token);
	const userId = user.id;
	const navigate = useNavigate();

	const handleUpdatePassword = async (data) => {
		setLoading(true);
		try {
			const res = await API.post(
				`https://vv-vv.onrender.com/api/user/changePassword/${userId}`,
				{
					oldPassword: data.oldPassword,
					newPass: data.newPass,
					confirmPass: data.confirmPass,
				},
				{
					headers: {
						Authorization: `${token}`,
						"Content-Type": "application/json",
					},
				}
			);
			if (res.status === 200) {
				toast.success(res.data.message);
				setTimeout(() => {
					navigate("/dashboard");
				}, 3000);
				reset();
			} else {
				toast.error(res.data.message);
			}
		} catch (error) {
			toast.error(error.response?.data?.message || "An error occurred");
		} finally {
			setLoading(false);
		}
	};
	const form = useForm();
	const { register, handleSubmit, formState, reset } = form;
	const { errors } = formState;
	return (
		<div className="w-4/5 md:w-3/5 lg:w-1/2 m-auto mt-[10%] p-2">
			<form
				className="flex flex-col gap-4 w-full z-50  bg-white _shadow p-5 px-10 pb-10 md:px-24 md:pb-10 rounded-xl shadow-xl"
				onSubmit={handleSubmit(handleUpdatePassword)}
			>
				<h2 className="sm:text-xl text-sm font-bold mb-4 text-center">
					Update password
				</h2>
				<input
					type="password"
					placeholder="Old password"
					{...register("oldPassword", { required: "Oldpassword is required" })}
					className="border p-2 rounded bg-white text-black"
				/>
				<p className="text-red-500">{errors.message}</p>
				<input
					type="password"
					placeholder="New password"
					{...register("newPass", {
						required: "New password required",
					})}
					className="border p-2 rounded bg-white text-black"
				/>
				<input
					type="password"
					placeholder="Confirm new password"
					{...register("confirmPass", {
						required: "confirm new password is required",
					})}
					className="border p-2 rounded bg-white text-black"
				/>
				<button type="submit" className="bg-[#40679e] text-white p-2 rounded">
					{loading ? "Submitting..." : "Submit"}
				</button>
			</form>
			<ToastContainer />
		</div>
	);
};

export default Privacy;
