import React, { useEffect, useState } from 'react';
import logo from '../../src/assests/nailprobg.png';
import {useNavigate} from 'react-router-dom';

function Navbar() {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScrollBar = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
        window.addEventListener("scroll", handleScrollBar);

        return () => {
            window.removeEventListener("scroll", handleScrollBar);
        }
    }, [])
    const scrollbar = (e) => {
        document.getElementById(e).scrollIntoView({ behavior: 'smooth' });
    }
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/about')
    }
    
    return (
        <>
            <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 ${sticky ?
                    'sticky-navbar shadow-md bg-base-200 duration-400 transition-all ease-in-out top-0 z-20 sticky' : ""}`}>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a href="/" className="h-auto w-28">
                            <img src={logo} alt="nail-pro-logo" />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href='/' className='text-red-600 font-semibold'>Home</a></li>
                            <li><a href='/contact'>Contact us</a></li>
                            <li onClick={() => { scrollbar('service') }}><a>Service</a></li>
                            <li><a href='/about'>About</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn btn-outline outline-indigo-500 rounded-full" onClick={handleClick}>Visit to Store</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;