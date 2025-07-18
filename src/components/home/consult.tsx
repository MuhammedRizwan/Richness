"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";

type FormValues = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export default function Consultation() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        reset();
    };

    return (
        <div className="flex flex-col md:flex-row font-serif">
            <div className="w-full md:w-1/2 relative">
                <Image
                    src="/group-analysis-of-digital-data.webp"
                    alt="Team"
                    width={800}
                    height={600}
                    className=" object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/60 bg-opacity-40 flex items-center justify-center ">
                    <p className="text-white text-md md:text-xl px-6 text-center font-semibold">
                        We are here to help transform your business.
                    </p>
                </div>
            </div>

            <div className="w-full md:w-1/2 bg-[#1e2d2f] text-white py-4 px-20 flex flex-col justify-center">
                <span className="text-xs md:text-sm uppercase tracking-wider text-gray-400 mb-2 inline-block">Get In Touch</span>
                <h2 className="text-md md:text-xl font-bold mb-6">
                    WE ARE HAPPY TO HEAR FROM YOU
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input
                                {...register("name", { required: "Name is required",minLength:{value:5,message:"Name must be at least 5 characters long"} })}
                                placeholder="Name"
                                className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400 text-white text-xs md:text-sm py-2"
                            />
                                <p className="text-red-400 text-xs h-3 mt-1">{errors.name?.message || " "}</p>
                        </div>

                        <div>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                placeholder="Email"
                                className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400 text-white py-2 text-xs md:text-sm "
                            />
                                <p className="text-red-400 text-xs h-3 mt-1">{errors.email?.message || " "}</p>
                        </div>
                    </div>

                    <div>
                        <input
                            {...register("phone", {
                                required: "Phone is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Phone must be 10 digits",
                                },
                            })}
                            placeholder="Phone"
                            className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400 text-white py-2 text-xs md:text-sm "
                        />
                            <p className="text-red-400 text-xs h-3 mt-1">{errors.phone?.message || " "}</p>
                    </div>

                    <div>
                        <textarea
                            {...register("message", { required: "Message is required" })}
                            rows={4}
                            placeholder="Message"
                            className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black placeholder-gray-400 text-white py-2 text-xs md:text-sm "
                        />
                            <p className="text-red-400 text-xs h-3 mt-1">{errors.message?.message}</p>
                    </div>

                    <button
                        type="submit"
                        className="bg-white text-black px-6 py-3 text-xs md:text-sm  rounded-md font-semibold hover:bg-gray-200 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

