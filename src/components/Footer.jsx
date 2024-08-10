import React from 'react';
import instagram from '../../src/assests/instagram.svg'
import facebook from '../../src/assests/facebook.svg'
import youtube from '../../src/assests/youtube.svg'

function Footer() {
    const scrollbar = (e) => {
        document.getElementById(e).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10'>
                <footer className="footer footer-center text-base-content rounded p-10">
                    <nav className="grid grid-flow-col gap-4">
                        <a href="/" className="link link-hover">Home</a>
                        <a href="/contact" className="link link-hover">Contact</a>
                        <a href="/about" className="link link-hover">About</a>
                        <a className="link link-hover" onClick={() => { scrollbar('service') }}>Service</a>
                    </nav>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <a>
                                <img src={instagram} alt="instagram" className='h-8 w-8 cursor-pointer'/>
                            </a>
                            <a>
                                <img src={youtube} alt="youtube" className='h-8 w-8 cursor-pointer' />
                            </a>
                            <a>
                                <img src={facebook} alt="facebook icon" className='h-8 w-8 cursor-pointer' />
                            </a>
                            
                        </div>
                    </nav>
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Nailpro.in</p>
                    </aside>
                </footer>
            </div>
        </>
    )
}

export default Footer