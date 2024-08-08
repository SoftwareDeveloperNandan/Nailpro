import React from 'react';
import logo from '../../src/assests/hero-imgbg.png';
import {useNavigate} from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/about')
    }
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-10'>

                <div className='w-full md:w-1/2 order-2 md:order-1 md:mt-32'>
                    <div className="space-y-8">
                        <h1 className='text-4xl font-bold'>
                            Crafting Nails That Leave a Mark
                        </h1>
                        <p className='text-sm text-balance'>
                            At NailPro.in, we specialize in crafting nails that leave a lasting impression. Explore our range of premium nail products and expert tips to create stunning, unique designs. Let your nails be a testament to your creativity and style with NailPro.in.
                        </p>
                        <button className='btn btn-outline rounded-full' onClick={handleClick}>Book an Appointment</button>
                    </div>
                </div>  

                <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center">
                    <img src={logo} alt="hero-image" className='w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-full hover:border-2 hover:border-slate-100 transition-all duration-300' />
                </div>
            </div>

        </>
    )
}

export default Hero;
