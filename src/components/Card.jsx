import React from 'react'
import Pedicure from '../../src/assests/Pedicure.png';
import Menicure from '../../src/assests/Menicure.png';
import Eylesh from '../../src/assests/Eylesh-lifting.png';
import Microblading from '../../src/assests/microblading.png';
import Nails from '../../src/assests/Nail.png';
import Borowtinting from '../../src/assests/BorowLinting.png';
import Lashtingting from '../../src/assests/LashLintings.png';
import Tatto from '../../src/assests/Tatto.png';
import { useNavigate } from 'react-router-dom';

function Card() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/pedicure')
    }
    const handleMenicure = () => {
        navigate('/menicure')
    }
    const handleEyeles = () => {
        navigate('/eyelash')
    }
    const handleMicroblading = () => {
        navigate('/microblading')
    }
    const handleNails = () => {
        navigate('/nails')
    }

    const handleBorow = () => {
        navigate('/borowlinting')
    }
    const handleLash = () => {
        navigate('/lashlinting')
    }

    const hadleTatto = () => {
        navigate('/tatto')
    }
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white text-black dark:bg-inherit dark:text-white' id='service'>

                <div className='mt-10 mb-10 text-center items-center '>
                    <h2 className='text-3xl font-bold'>Our <span className='text-red-600'>Premium Services</span></h2>
                </div>
                {/* Alert message */}
                <div>
                    <h1 className='text-center font-bold text-sm text-gray-70000'>Offer valid until August 16th.</h1>
                </div>
                <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                    <div className="card w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer bg-white text-black dark:bg-inherit dark:text-white" onClick={handleClick}>
                        <figure className="px-3 pt-4 overflow-hidden">
                            <img
                                src={Pedicure}
                                alt="Shoes"
                                className="rounded-2xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Pedicure
                            </h2>
                            <p className='text-sm'>
                                A pedicure enhances relaxation, promotes foot health, and
                                leaves feet looking rejuvenated, boosting confidence and overall well-being.</p>
                        </div>
                    </div>

                    <div className="card w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer bg-white text-black dark:bg-inherit dark:text-white" onClick={handleMenicure}>
                        <figure className="px-3 pt-4 overflow-hidden">
                            <img
                                src={Menicure}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-xl font-bold">Menicure</h2>
                            <p className='text-sm'>A manicure enhances hand aesthetics, promotes nail health, and offers relaxation, leaving hands looking polished and boosting confidence.</p>
                        </div>
                    </div>

                    <div className="card w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer bg-white text-black dark:bg-inherit dark:text-white" onClick={handleEyeles}>
                        <figure className="px-3 pt-4 overflow-hidden">
                            <img
                                src={Eylesh}
                                alt="Eylesh"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-xl font-bold">Eyelashes</h2>
                            <p className='text-sm'>Beautiful eyelashes enhance eye allure, adding depth and definition, while boosting confidence and creating a captivating, expressive look.</p>
                        </div>
                    </div>


                    <div className="card w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer bg-white text-black dark:bg-inherit dark:text-white" onClick={handleMicroblading}>
                        <figure className="px-3 pt-4 overflow-hidden">
                            <img
                                src={Microblading}
                                alt="Microblading"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-xl font-bold">Microblading</h2>
                            <p className='text-sm'>
                                Microblading creates perfectly shaped, natural-looking eyebrows, enhancing facial features and boosting confidence with long-lasting, effortless beauty.</p>
                        </div>
                    </div>

                    <div className="card w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer bg-white text-black dark:bg-inherit dark:text-white" onClick={handleBorow}>
                        <figure className="px-3 pt-4 overflow-hidden">
                            <img
                                src={Borowtinting}
                                alt="Borowtinting"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-xl font-bold">Borow Tinting</h2>
                            <p className='text-sm'>Brow tinting enhances brow color and definition, providing a fuller, natural look that frames the face beautifully and simplifies grooming.</p>
                        </div>
                    </div>

                    <div className="card w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer bg-white text-black dark:bg-inherit dark:text-white" onClick={handleNails}>
                        <figure className="px-3 pt-4 overflow-hidden">
                            <img
                                src={Nails}
                                alt="Nails"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-xl font-bold">Nails</h2>
                            <p className='text-sm'>Well-groomed nails add elegance and style, enhancing overall appearance and boosting confidence with a polished, professional look.</p>
                        </div>
                    </div>

                    <div className="card w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer bg-white text-black dark:bg-inherit dark:text-white" onClick={handleLash}>
                        <figure className="px-3 pt-4 overflow-hidden" >
                            <img
                                src={Lashtingting}
                                alt="Lashtinting"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-xl font-bold">Lash Linting</h2>
                            <p className='text-sm'>Lash tinting adds depth and definition to lashes, giving them a fuller, darker look that enhances your eyes effortlessly.</p>
                        </div>
                    </div>

                    <div className="card w-full shadow-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer bg-white text-black dark:bg-inherit dark:text-white" onClick={hadleTatto}>
                        <figure className="px-3 pt-4 overflow-hidden">
                            <img
                                src={Tatto}
                                alt="Tatto"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-xl font-bold">Tatto</h2>
                            <p className='text-sm'>Eyelash lifting creates beautifully curled, lifted lashes, enhancing your eyes with a natural, wide-eyed look and reducing daily makeup time.</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Card

