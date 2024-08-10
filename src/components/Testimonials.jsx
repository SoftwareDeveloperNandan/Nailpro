import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Anjali from '../../src/assests/testimonials/Anjali-Ancchan.png';
import Heli from '../../src/assests/testimonials/Heli-vyash.png';
import Rajni from '../../src/assests/testimonials/Rajni-chattaraj.png';
import Shona from '../../src/assests/testimonials/Shona-Graham.png';
import murunal from '../../src/assests/testimonials/Mrunal-Thakur.png';

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
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white text-black dark:bg-inherit dark:text-white'>
                <div className='mt-10 mb-10 text-center items-center'>
                    <h2 className='text-3xl font-bold'>Our <span className='text-red-600'>Testimonials</span></h2>
                </div>
                <Slider {...settings}>
                    <div className='flex flex-col px-2 '>
                        <div className="card w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer bg-white text-black dark:bg-inherit dark:text-white">
                            <div className="avatar flex justify-center mt-3">
                                <div className="w-36 rounded-full shadow-2xl">
                                    <img src={Anjali} alt="Anjali Anchan" />
                                </div>
                            </div>
                            <div className="card-body flex-grow h-full">
                                <h2 className="text-xl font-bold text-center">Anjali Anchan</h2>
                                <p className='text-sm text-justify'>
                                    Great service with wonderful staff, especially <span className='text-sm font-bold'>Kalpana</span>. Experienced and attentive, she ensured I was happy with the eyelash services. This place offers true value for money, making it stand out above the rest.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col px-2'>
                        <div className="card w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer p-3 bg-white text-black dark:bg-inherit dark:text-white">
                            <div className="avatar flex justify-center mt-3">
                                <div className="w-36 rounded-full shadow-2xl">
                                    <img src={Heli} alt="Heli Vyash" />
                                </div>
                            </div>
                            <div className="card-body flex-grow h-full">
                                <h2 className="text-xl font-bold text-center">Heli Vyash</h2>
                                <p className='text-sm text-justify'>
                                    Fabulous place ! Great staff .. kind warm and brilliant/ quick with their work
                                    Great precision! Had such a wonderful time at Nail pro ! Highly recommended.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col px-2'>
                        <div className="card w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer bg-white text-black dark:bg-inherit dark:text-white">
                            <div className="avatar flex justify-center mt-3">
                                <div className="w-36 rounded-full shadow-2xl">
                                    <img src={Shona} alt="Shona Graham" />
                                </div>
                            </div>
                            <div className="card-body flex-grow h-full">
                                <h2 className="text-xl font-bold text-center">Shona Graham</h2>
                                <p className='text-sm text-justify'>
                                    Always visit Nail Pro in Mumbai for the BEST service—professional, thorough, and lovely staff. The acrylic nails are done quickly and beautifully. If you haven’t visited yet, I highly recommend them!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col px-2'>
                        <div className="card w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer p-2 bg-white text-black dark:bg-inherit dark:text-white">
                            <div className="avatar flex justify-center mt-3">
                                <div className="w-36 rounded-full shadow-2xl">
                                    <img src={Rajni} alt="Rajni Chattaraj" />
                                </div>
                            </div>
                            <div className="card-body flex-grow h-full">
                                <h2 className="text-xl font-bold text-center">Rajni Chattaraj</h2>
                                <p className='text-sm text-justify'>
                                    Excellent service and skilled staff. Highly recommended for Nail art. Thanks to the Nail Pro team for making my birthday special with beautiful Nail extensions.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Mrunal Thakur */}
                    <div className='flex flex-col px-2'>
                        <div className="card w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer p-4 bg-white text-black dark:bg-inherit dark:text-white">
                            <div className="avatar flex justify-center mt-3">
                                <div className="w-36 rounded-full shadow-2xl">
                                    <img src={murunal} alt="Mrunal-Thakur" />
                                </div>
                            </div>
                            <div className="card-body flex-grow h-full">
                                <h2 className="text-xl font-bold text-center">Mrunal Thakur</h2>
                                <p className='text-sm text-justify'>
                                It was an absolute amazing experience with Nisha. Very quick and polite. Thank you for doing my nails on such short notice.
                                </p>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </>
    );
}

export default Testimonials;
