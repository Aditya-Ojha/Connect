import React from 'react'

export const ShimmerProfile = () => {

    return (
        <div className='lg:mt-20 flex flex-col items-center mt-16 w-full min-h-[75%] bg-white pt-6 px-4 pb-4 rounded shadow-lg border-[#818181]'>

            {/* Profile Image */}
            <div className='sm:-mt-20 w-fit flex -mt-24'>
                <div className='sm:w-28 sm:h-28 w-36 h-36 bg-gray-200 rounded-full animate-pulse'>
                </div>
            </div>
            {/* Profile Data */}
            <div className='w-24 h-7 mt-4 bg-gray-200 rounded animate-pulse'></div>

            <div className='flex flex-col items-center justify-between h-24 mt-4'>
                <div className='flex items-center'>
                    <div className='w-16 h-4 mr-2 bg-gray-200 rounded animate-pulse'></div>
                    <div className='w-16 h-4 mr-2 bg-gray-200 rounded animate-pulse'></div>
                    <div className='w-16 h-4 bg-gray-200 rounded animate-pulse'></div>

                </div>

                <div className='flex items-center'>
                    <div className='w-16 h-4 bg-gray-200 rounded animate-pulse'></div>
                </div>

                <div className='flex items-center'>
                    <div className='w-36 h-4 bg-gray-200 rounded animate-pulse'></div>
                </div>
            </div>

            <div className='flex flex-col w-full px-6 h-fit mt-4 overflow-hidden'>
                <div className='w-full h-6 bg-gray-200 rounded animate-pulse'></div>

            </div>

            <div className='w-full flex justify-end mt-4'>
                <div className='w-24 h-8 bg-gray-200 rounded animate-pulse'></div>
            </div>
        </div>
    )
}
