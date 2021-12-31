import React from 'react'

const Search = () => {
    return (
        <div className="lg:hidden mt-6 flex">
            <div className='h-10 w-4 -mr-6 z-10'>
                <div className='bg-search  w-full h-full bg-no-repeat bg-contain bg-center'>
                </div>
            </div>
            <input className="text-[#A7ADB7] border-2 border-[#FEC6E8] bg-white h-10 w-3/5 pr-4 pl-8 rounded-lg text-base focus:outline-none"
                type="search" name="search" placeholder="Search" />
        </div>
    )
}

export default Search;