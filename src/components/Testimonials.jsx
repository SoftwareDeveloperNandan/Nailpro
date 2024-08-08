import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pedicure from '../../src/assests/Pedicure.png';

function Testimonials() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10'>
                <div className='mt-10 mb-10 text-center items-center '>
                    <h2 className='text-3xl font-bold'>Our <span className='text-red-600'>Testimonials</span></h2>
                </div>
                <Slider {...settings}>

                    <div className="card bg-base-100 w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer card-container">

                        <div className="avatar flex justify-center mt-3">
                            <div className="w-36 rounded-full shadow-2xl">
                                <img src={Pedicure} />
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="text-xl font-bold text-center">Pedicure</h2>
                            <p className='text-sm'>
                                A pedicure enhances relaxation, promotes foot health, and leaves feet looking rejuvenated, boosting confidence and overall well-being.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer card-container">

                        <div className="avatar flex justify-center mt-3">
                            <div className="w-36 rounded-full shadow-2xl">
                                <img src={Pedicure} />
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="text-xl font-bold text-center">Pedicure</h2>
                            <p className='text-sm'>
                                A pedicure enhances relaxation, promotes foot health, and leaves feet looking rejuvenated, boosting confidence and overall well-being.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer card-container">

                        <div className="avatar flex justify-center mt-3">
                            <div className="w-36 rounded-full shadow-2xl">
                                <img src={Pedicure} />
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="text-xl font-bold text-center">Pedicure</h2>
                            <p className='text-sm'>
                                A pedicure enhances relaxation, promotes foot health, and leaves feet looking rejuvenated, boosting confidence and overall well-being.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer card-container">

                        <div className="avatar flex justify-center mt-3">
                            <div className="w-36 rounded-full shadow-2xl">
                                <img src={Pedicure} />
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="text-xl font-bold text-center">Pedicure</h2>
                            <p className='text-sm'>
                                A pedicure enhances relaxation, promotes foot health, and leaves feet looking rejuvenated, boosting confidence and overall well-being.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer card-container">

                        <div className="avatar flex justify-center mt-3">
                            <div className="w-36 rounded-full shadow-2xl">
                                <img src={Pedicure} />
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="text-xl font-bold text-center">Pedicure</h2>
                            <p className='text-sm'>
                                A pedicure enhances relaxation, promotes foot health, and leaves feet looking rejuvenated, boosting confidence and overall well-being.</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer card-container">

                        <div className="avatar flex justify-center mt-3">
                            <div className="w-36 rounded-full shadow-2xl">
                                <img src={Pedicure} />
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="text-xl font-bold text-center">Pedicure</h2>
                            <p className='text-sm'>
                                A pedicure enhances relaxation, promotes foot health, and leaves feet looking rejuvenated, boosting confidence and overall well-being.</p>
                        </div>
                    </div>                   

                </Slider>

            </div>
        </>
    )
}

export default Testimonials