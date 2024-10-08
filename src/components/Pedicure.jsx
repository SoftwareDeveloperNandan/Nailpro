import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Pedicure from '../../src/assests/Pedicure.png';
import {useNavigate} from 'react-router-dom';

function Purchase() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/contact')
    }
    return (
        <>
            <Navbar />
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10'>
                <div className="flex flex-col lg:flex-row">
                    <figure className="overflow-hidden">
                        <img
                            src={Pedicure}
                            alt="Pedicure"
                            className="rounded-2xl object-cover h-64 sm:h-80 md:h-96 lg:h-full w-full" />
                    </figure>
                    <div className='w-full ml-5'>
                        <h1 className="text-3xl font-bold">Pedicure</h1>
                        <p className="py-5 text-sm">
                            A pedicure not only enhances relaxation and promotes foot health but also leaves feet looking rejuvenated and beautiful. This treatment boosts confidence and overall well-being by addressing foot care needs, reducing stress, and providing a refreshing experience that makes you feel pampered and revitalized.
                        </p>
                        <div className='w-full flex gap-3'>
                            <button className='badge badge-success text-white'>4.3 
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block ml-2 h-4 w-4 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 2.25l3.09 6.26 6.91 1-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.38 2 9.51l6.91-1L12 2.25z"
                                    fill="white"
                                    stroke="white"
                                />
                            </svg>
                            </button>
                            <p className='text-sm'><span className='text-slate-400'>400 Reviews</span> & <span className='text-slate-400'>334 Ratings</span></p>
                        </div>

                        <div className='w-full flex items-center gap-3 my-3'>
                            <h1 className='text-2xl font-bold'>₹ 800</h1>
                            <h2 className='text-slate-400 text-xl line-through'>₹ 1,143</h2>
                            <h3 className='text-green-700 text-xs font-bold'>30% Off</h3>
                        </div>
                        <button className='btn btn-outline rounded-full' onClick={handleClick}>Book an Appointment</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Purchase;