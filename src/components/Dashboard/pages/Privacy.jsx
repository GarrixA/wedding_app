import React from 'react';
import { useForm } from "react-hook-form";


const Privacy = () => {
    const form = useForm();
	const { register, control, handleSubmit, formState } = form;
	const { errors } = formState;
  return (
    <div className='w-4/5 md:w-3/5 lg:w-1/2 m-auto mt-[10%] p-2'>
       <form
            className="flex flex-col gap-4 w-full z-50  bg-white _shadow p-5 px-10 pb-10 md:px-24 md:pb-10 rounded-xl shadow-xl"
        >
            <h2 className="sm:text-xl text-sm font-bold mb-4 text-center">
                Update password
            </h2>
            <input
                type="password"
                placeholder="Old password"
                {...register("old-password", { required: "Oldpassword is required" })}
                className="border p-2 rounded bg-white text-black"
            />
            <p className="text-red-500">{errors.message}</p>
            <input
                placeholder="New password"
                {...register("new-password", {
                    required: "New password required",
                })}
                className="border p-2 rounded bg-white text-black"
                
            />
            <input
                placeholder="Confirm new password"
                {...register("confirm-new-password", {
                    required: "confirm new password is required",
                })}
                className="border p-2 rounded bg-white text-black"
                
            />
            <button
                type="submit"
                className="bg-[#40679e] text-white p-2 rounded"
            >
                {/* {loading ? "Submitting..." : "Submit"} */}
                submit
            </button>
        </form>
    </div>
  );
}

export default Privacy;
