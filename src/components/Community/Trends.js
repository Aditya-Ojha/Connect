import React from 'react'

const Trends = () => {
    return (
        <div className='sm:pl-0 pl-6 mt-6'>
            <h2 className='sm:text-xl text-[#19191B] font-Mulish font-bold text-2xl mb-3'>Trends</h2>

            <div className="w-full h-[5.5rem] flex  justify-start overflow-x-auto scrollbar-hide">
                <div className="min-w-[7.5rem] mr-2 h-full flex flex-col justify-center items-center bg-gradient-to-b from-[#CC00FF] to-[#FF0099] border rounded-md border-[#FF0099]">
                    <div className='w-14 h-11 min-w-7 min-h-7 mt-2'>
                        <div className='bg-heart w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                    </div>
                    <h4 className='sm:text-base font-normal font-Mulish text-lg text-white'>LDR</h4>
                </div>
                <div className="min-w-[7.5rem] mr-2 h-full flex flex-col justify-center items-center border rounded-md border-[#FF0099]">
                    <div className='w-14 h-11 min-w-7 min-h-7 mt-2'>
                        <div className='bg-sphere w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                    </div>
                    <h4 className='sm:text-base font-light font-Mulish text-lg text-[#EB0090]'>Rebound</h4>
                </div>
                <div className="min-w-[7.5rem] mr-2 h-full flex flex-col justify-center items-center border rounded-md border-[#FF0099]">
                    <div className='w-14 h-11 min-w-7 min-h-7 mt-2'>
                        <div className='bg-bulb w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                    </div>
                    <h4 className='sm:text-base font-light font-Mulish text-lg text-[#EB0090]'>Date Ideas</h4>
                </div>
                <div className="min-w-[7.5rem] mr-2 h-full flex flex-col justify-center items-center border rounded-md border-[#FF0099]">
                    <div className='w-14 h-11 min-w-7 min-h-7 mt-2'>
                        <div className='bg-notebook w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                    </div>
                    <h4 className='sm:text-base font-light font-Mulish text-lg text-[#EB0090]'>Confession</h4>
                </div>
                <div className="min-w-[7.5rem] mr-2 h-full flex flex-col justify-center items-center border rounded-md border-[#FF0099]">
                    <div className='w-14 h-11 min-w-7 min-h-7 mt-2'>
                        <div className='bg-hash w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                    </div>
                    <h4 className='sm:text-base font-light font-Mulish text-lg text-[#EB0090]'>Misc.</h4>
                </div>
            </div>
        </div>
    )
}

export default Trends;