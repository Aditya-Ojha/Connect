import React from 'react'

export const ShimmerPost = () => {

    return (
        <div className='sm:px-4 h-fit bg-white w-full px-12 py-3 rounded-md overflow-hidden'>

            <div className='h-full w-full flex flex-col items-start'>

                <div className='flex items-center mb-5 w-full justify-between'>
                    <div className='flex justify-between items-center border rounded bg-gray-200 animate-pulse h-4 w-20'>
                    </div>
                </div>

                <div className='flex justify-center items-center mb-2'>
                    <div className='h-14 w-14 rounded-full bg-gray-200 animate-pulse'></div>
                    <div className='ml-4'>
                        <div className='w-20 h-4 rounded mb-2 bg-gray-200 animate-pulse'></div>
                        <div className='w-20 h-4 rounded bg-gray-200 animate-pulse'></div>
                    </div>
                </div>

                <div className='h-fit mb-2 w-full'>
                    <div className='w-full h-4 mb-2 rounded bg-gray-200 animate-pulse'></div>
                    <div className='w-full h-4 rounded bg-gray-200 animate-pulse'></div>
                </div>

                <div className='flex justify-between items-center w-full mb-3.5'>
                    <div className='flex items-center'>
                        <div className='w-24 h-4 rounded bg-gray-200 animate-pulse'></div>
                    </div>
                    <div className='flex items-center '>
                        <div className='w-16 h-4 bg-gray-200 rounded animate-pulse'></div>
                    </div>
                </div>

                <div className='w-full h-6 rounded bg-gray-200 animate-pulse'></div>

            </div>

        </div>
    )
}


export const ShimmerMessage = () => {

    return (
        <div className='h-full w-full flex flex-col items-start mb-2.5 py-2 px-3 shadow-sm rounded-md'>
            <div className='flex justify-center items-center mb-2'>
                <div className='h-14 w-14 rounded-full bg-gray-200 animate-pulse'></div>
                <div className='ml-4'>
                    <div className='w-20 h-4 rounded mb-2 bg-gray-200 animate-pulse'></div>
                    <div className='w-20 h-4 rounded bg-gray-200 animate-pulse'></div>
                </div>
            </div>

            <div className='h-fit mb-2 w-full'>
                <div className='w-full h-4 mb-2 rounded bg-gray-200 animate-pulse'></div>
                <div className='w-full h-4 rounded bg-gray-200 animate-pulse'></div>
            </div>
        </div>
    )
}
