//import React from 'react'
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

import jobslogo from "../assets/img/jobbbs.png"

const Navbar = () => {
    const [isShrinking, setIsShrinking] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen)
    // };

    const handleClick = () => {
		setIsShrinking(true);
		setTimeout(() => {
			setIsShrinking(false);
		}, 150); 
	};

    useEffect(() => {
        if (isOpen) setIsOpen(false)
    }, [isOpen]);

  return (
    <nav className="w-full fixed top-0 z-50 left-0 right-0 bg-[#f4f1f1]">
        <div className="max-w-[1300px]  w-full flex items-center justify-between gap-x-3 mx-auto py-[24px] px-5 md:px-5 2xl:px-[122px]">
            <Link to="/" className="z-40">
                <img className="w-[150px]" src={jobslogo} alt="logo" />
            </Link>

            {/* <ul className={`flex flex-col lg:hidden 
                ${
                    isOpen ? "left-0" : "left-[-100%]"
                } absolute top-0 left-0 z-10 shadow-xl px-5 transition-all h-screen w-[75%] sm:w-[50%] bg-[#f4f1f1] pt-[150px] gap-y-3 gap-x-[70px] items-start font-outfit font-semibold text-[#08072D] text-[20px] leading-[24px]`}>

                <Link to="/">Home</Link>
               

                <button className={`bg-[#08072D] hover:bg-[#08072D]/90 font-outfit mt-5 transition-opacity sm:hidden text-white text-[16px] font-medium px-[30px] py-[15px] rounded ${
                  isShrinking ? "transform scale-90" : ""  
                } transition-transform duration-500`}
                onClick={handleClick}>
                    Post New Jobs
                </button>
            </ul> */}

            {/* <ul className="hidden lg:flex gap-x-[70px] mx-auto items-center w-fit font-outfit font-semibold text-[#08072D] text-[18px] leading-[24px]">
                
            </ul> */}

            <Link to="/job-search">
                <button
                    className={`bg-[#08072D] hover:bg-[#08072D]/90 font-outfit transition-opacity ms-auto lg:ms-0 text-white text-[18px] font-medium px-[30px] py-[15px] rounded-[5px] ${
                        isShrinking ? "transform scale-90" : ""
                    } transition-transform duration-500`}
                    onClick={handleClick}
                >
                    Search For A Job
                    
                </button>
            </Link>
            
            {/* <button
				onClick={toggleMenu}
				className="text-gray-600 focus:outline-none lg:hidden">
				{isOpen ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10 transition duration-300 transform rotate-90"
						fill="none"
						viewBox="0 0 24 24"
						stroke="#08072D">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10 transition duration-300 transform rotate-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke="#08072D">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				)}
			</button> */}

        </div>
    </nav>
  )
}

export default Navbar;