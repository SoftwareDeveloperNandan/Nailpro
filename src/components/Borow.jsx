import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Borowtinting from '../../src/assests/BorowLinting.png';
import {useNavigate} from 'react-router-dom';

function Borow() {
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
                            src={Borowtinting}
                            alt="Borowtinting"
                            className="rounded-2xl object-cover h-64 sm:h-80 md:h-96 lg:h-full w-full" />
                    </figure>
                    <div className='w-full ml-5'>
                        <h1 className="text-3xl font-bold">Borow tinting</h1>
                        <p className="py-5 text-sm">
                        Brow tinting enhances brow color and definition, creating a fuller, more natural look that beautifully frames the face. This treatment simplifies daily grooming, making your brows appear well-maintained and polished effortlessly. Enjoy the convenience and confidence of perfectly tinted brows that complement your features and overall appearance.
                        </p>
                        <div className='w-full flex gap-3'>
                            <button className='badge badge-success text-white'>4.4
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
                            <p className='text-sm'><span className='text-slate-400'>503 Reviews</span> & <span className='text-slate-400'>250 Ratings</span></p>
                        </div>

                        <div className='w-full flex items-center gap-3 my-3'>
                            <h1 className='text-2xl font-bold'>₹ 1,500</h1>
                            <h2 className='text-slate-400 text-xl line-through'>₹ 2,143</h2>
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

export default Borow