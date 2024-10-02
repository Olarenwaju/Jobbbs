/* eslint-disable react/prop-types */
//import React from 'react'
//import xiaomilogo from '../assets/img/xiaomilogo.png'
import { BookmarkIcon, BuildingOfficeIcon, CpuChipIcon, GlobeAltIcon, MapPinIcon, CurrencyDollarIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';



const JobCard = ({ job }) => {
  return (
    <motion.div className='bg-white rounded-[6px] p-3 w-full md:max-w-[500px]'
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.5}}
    >

        <div className='flex justify-between pb-3'>

            <div className='flex items-center pb-2'>
                {/* <div className='pr-2'>
                    <img className="rounded-full w-10" src={xiaomilogo} alt='' />
                </div> */}

                <div>
                    <h1 className="text-base font-semibold">{job.role}</h1>
                    <p className="text-sm text-[#0000007c]">{job.company}</p>
                </div>
            </div>


            <div> <BookmarkIcon className="h-5 w-5 text-gray-500 mr-3" /> </div>
        </div>

        <div className="flex justify-between font-outfit text-sm leading-7 pb-3">

            <div>
                <p className="flex items-center">
                    <BuildingOfficeIcon className="h-4 w-4 text-gray-500 mr-1" />
                    <span>{job.country}</span>
                </p>
                <p className="flex items-center">
                    <CpuChipIcon className="h-4 w-4 text-gray-500 mr-1" />
                    <span>{job.company}</span>
                </p>
                <p className="flex items-center">
                    <GlobeAltIcon className="h-4 w-4 text-gray-500 mr-1" />
                    <span>{job.sector}</span>
                </p>

            </div>

            <div>
                <p className="flex items-center">
                    <MapPinIcon className="h-4 w-4 text-gray-500 mr-1" />
                    <span>{job.location}</span>
                </p>
                <p className="flex items-center">
                    <CurrencyDollarIcon className="h-4 w-4 text-gray-500 mr-1" />
                    $<span>{job.salary}</span>
                </p>
                <p className="flex items-center">
                    <EnvelopeIcon className="h-4 w-4 text-gray-500 mr-1" />
                    <a className='text-[#08072D] font-bold' href={`mailto:${job.email}`} >
                        {job.email}
                    </a>
            
                </p>
            </div>

        </div>

        <div className="flex items-center gap-2 pb-7">
            {job.tags.map((tag, index) => (
                <div key={index} className="px-3 py-1 bg-yellow-300 rounded text-yellow-800 text-sm font-semibold">
                    {tag}
                </div>
            ))}
        </div>

        <div className="border-b-2 border-slate-300"></div>


        <div className="flex justify-between py-5">
            <p className="font-semibold text-sm text-[#08072D]">{job.job_date}</p>
        </div>


    </motion.div>
  )
}

export default JobCard