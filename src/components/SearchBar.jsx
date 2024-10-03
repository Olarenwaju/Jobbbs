/* eslint-disable react/prop-types */
//import React from 'react'

import {MagnifyingGlassIcon} from '@heroicons/react/24/solid'


const SearchBar = ({ searchTerm, onSearchChange, onSearchClick, }) => {

  return (
    <div className='flex items-center bg-gray-100 rounded shadow-md pl-4 w-full md:max-w-2xl mx-auto mb-10'>

      <MagnifyingGlassIcon className='h-5 w-5 text-gray-500 mr-3' />
      <input 
        type='text'
        value={searchTerm}
        onChange={onSearchChange}
        placeholder='search by company, role, country or location'
        className="bg-gray-100 outline-none flex-grow"
      />

      <button onClick={onSearchClick} className='bg-yellow-400 text-white font-semibold px-5 py-4 rounded hover:bg-yellow-500'>
        Find Job
      </button>
    </div>
  )
}

export default SearchBar