import React, { useState } from 'react'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from 'react-hot-toast';


function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = async (data) => {
        setIsSubmitting(true); // disable submit button
        const contactInfo = {
            Username: data.Username,
            Email: data.Email,
            Phone: data.Phone,
            Message: data.message
        }
        try {
            console.log(contactInfo);
            const dataSubmited = await axios.post("https://getform.io/f/awngrkkb", contactInfo);
            toast.success("Your Appointment is successfully submitted.");
            if (dataSubmited) {
                setTimeout(() => {
                    location.reload();
                }, 1000);
            } else {
                toast.error("Your data has been submiteed...");
            }
        } catch (error) {
            console.log(error);
            toast.error("Please fill all required field.")
        } finally {
            setIsSubmitting(false) //re-enable the button
        }
    }
    return (
        <>
            <Navbar />
            <div className='max-w-screen-2xl mx-auto md:px-20 px-4 mt-10'>
                <div className="hero min-h-fit">
                    <div className="hero-content flex flex-col gap-8 lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl font-bold">Contact <span className='text-red-600'>Us</span></h1>
                            <p className="py-6 text-sm">
                                Contact us today to schedule your nail appointment! Call or email, and we'll be happy to assist with your booking.
                            </p>
                            {/* contact info icon*/}
                            <div className="flex items-center gap-2 mb-4">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path d="M3.654 1.328a1 1 0 0 1 .995.95l.25 3a1 1 0 0 1-.57.944l-1.7.85a13.017 13.017 0 0 0 5.154 5.154l.85-1.7a1 1 0 0 1 .944-.57l3 .25a1 1 0 0 1 .95.995v2.507a1 1 0 0 1-1.106.993C6.383 14.813 1.188 9.617.013 3.76A1 1 0 0 1 1.006 2.655h2.507z" />
                                </svg>
                                <p><span className='text-sm font-bold'>022 65075884</span> or <span className='text-sm font-bold'>9076064427</span></p>

                            </div>
                            {/* email icon*/}
                            <div className="flex items-center gap-2 mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <p className='text-sm'>nailpronbl@gmail.com</p>

                            </div>
                            {/* location icon*/}
                            <div className="flex items-center gap-2 mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70 md:h-5 md:w-5 lg:h-6 lg:w-6">
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 4.88 6.12 11.74 6.36 12.01a.75.75 0 0 0 1.28 0C12.88 20.74 19 13.88 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                                </svg>
                                <p className="text-sm">Shop No. 3 & 4, Hortencia, Plot No. 239, Intersection of 2nd & 30th Road, Bandra West, Mumbai - 400050</p>
                            </div>

                        </div>

                        {/* Contact Us Form Start */}
                        <div className="w-full bg-slate-100 text-black dark:bg-inherit dark:text-white p-6 shadow-sm rounded-md">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* Username */}
                                <div className="relative flex items-center mb-4">
                                    <input
                                        {...register("Username", { required: true })}
                                        type="text"
                                        id="Username"
                                        name="Username"
                                        className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-black dark:bg-black dark:text-white"
                                        placeholder="Username"
                                        autoComplete="off"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                    </svg>
                                </div>
                                {errors.Username && <span className="text-red-600 text-xs">This field is required</span>}

                                {/* Email */}
                                <div className="relative flex items-center mb-4">
                                    <input
                                        {...register("Email", { required: true })}
                                        type="email"
                                        id="Email"
                                        name="Email"
                                        className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-black dark:bg-black dark:text-white"
                                        placeholder="Email"
                                        autoComplete="off"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400">
                                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                </div>
                                {errors.Email && <span className="text-red-600 text-xs">This field is required</span>}

                                {/* Mobile */}
                                <div className="relative flex items-center mb-4">
                                    <input
                                        {...register("Phone", { required: true })}
                                        type="number"
                                        id="Phone"
                                        name="Phone"
                                        className="w-full border border-gray-300 rounded-md pl-10 pr-3 py-2 bg-white text-black dark:bg-black dark:text-white"
                                        placeholder="Phone"
                                        autoComplete="off"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400">
                                        <path d="M3.654 1.328a1 1 0 0 1 .995.95l.25 3a1 1 0 0 1-.57.944l-1.7.85a13.017 13.017 0 0 0 5.154 5.154l.85-1.7a1 1 0 0 1 .944-.57l3 .25a1 1 0 0 1 .95.995v2.507a1 1 0 0 1-1.106.993C6.383 14.813 1.188 9.617.013 3.76A1 1 0 0 1 1.006 2.655h2.507z" />
                                    </svg>
                                </div>
                                {errors.Phone && <span className="text-red-600 text-xs">This field is required</span>}

                                {/* Message */}
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-md font-medium text-gray-500 dark:text-gray-400 mb-2">How can we serve you?</label>
                                    <textarea
                                        {...register("message", { required: true })}
                                        id="message"
                                        name="message"
                                        rows="3"
                                        className="w-full border border-gray-300 rounded-md p-2 bg-white text-black dark:bg-black dark:text-white"
                                        placeholder="Your message"
                                        autoComplete="off"
                                    ></textarea>
                                </div>
                                {errors.message && <span className="text-red-600 text-xs">This field is required</span>}

                                {/* Submit Button */}
                                <div className="form-control mt-4">
                                    <button className="btn btn-primary w-full py-2 px-4 rounded-md" disabled={isSubmitting}>
                                        {isSubmitting ? "Submitting..." : "Book an Appointment"}
                                    </button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact