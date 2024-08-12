import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
    return (
        <>
            <Navbar />
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10'>
                <div className='text-center '>
                    <h1 className='text-3xl font-bold'>About <span className='text-red-600'>Us</span></h1>
                </div>

                <div className='mt-10'>
                    <p className='text-sm'>Welcome to The <span className='font-bold text-red-600'>Nail Pro Salon</span>, your premier destination for exceptional premium services in <span className='font-bold'>Bandra</span>! At The Nail Pro, we pride ourselves on offering a luxurious experience with a focus on quality and customer satisfaction.
                        <br />
                        Our skilled and experienced technicians are dedicated to enhancing your natural look with a range of services designed to cater to your needs. From perfectly polished nails and relaxing manicures and pedicures to expertly crafted eyelash lifting, brow tinting, and microblading, we are here to provide you with outstanding results.
                        <br />
                        We are thrilled to offer a special 30% discount on all our services, making it easier than ever to indulge in the beauty treatments you love. Our comprehensive service menu includes:
                        <br />
                        <ul>
                            <li>- Nails</li>
                            <li>- Eyelashes</li>
                            <li>- Eyelash Lifting</li>
                            <li>- Brow Tinting</li>
                            <li>- Lash Tinting</li>
                            <li>- Microblading</li>
                            <li>- Manicure</li>
                            <li>- Pedicure</li>
                        </ul>
                        <br />
                        Located at
                        <br />
                         <span className='font-bold'>Shop No. 3 & 4, Hortencia, Plot No. 239, Intersection of 2nd & 30th Road, Bandra West, Mumbai - 400050</span>, our salon is designed to offer a welcoming and comfortable environment.
                        <br />
                        Our working hours are from <span className='font-bold'>11:00 AM to 9:00 PM</span>.
                        <br />
                        For appointments or inquiries, please contact us at <span className='font-bold'>8097924999 or 9076064427</span>, or email us at <span className='font-bold'>nailpronbl@gmail.com</span>. Visit our website at <span className='font-bold'>nailpro.in</span> for more information.
                        We look forward to serving you and making your beauty experience exceptional.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About