import Navbar from "./Navbar"
import SearchBar from "./SearchBar"

import {CheckCircleIcon} from '@heroicons/react/24/solid'

//import React from 'react'


const Header = () => {
  return (
    <>
        <Navbar />
        <div className="bg-[#fff] text-center pt-[200px] pb-10">
            <h1 className="text-[#08072D] text-6xl font-bold font-poppins leading-[80px] pb-5">Building Bridges Between <br /> Talents and Employers</h1>
            <p className="text-[#00000089] font-semibold text-xl">Facilitating Collaboration and Growth Through Strategic Talent Placements</p>
        </div>

        <div className="flex justify-center items-center">
            <SearchBar />
        </div>

        <div className="flex justify-center items-center pt-10">
            <div className="flex mr-10">
                <CheckCircleIcon className='h-6 w-6 text-[#08072D] mr-3'/>
                <p className="text-[#4e494989] font-semibold text-lg">Global Opportunities</p>
            </div>

            <div>
            <div className="flex">
                <CheckCircleIcon className='h-6 w-6 text-[#08072D] mr-3'/>
                <p className="text-[#4e494989] font-semibold text-lg">Early Application Process</p>
            </div>
            </div>
        </div>

        

    </>
  )
}

export default Header