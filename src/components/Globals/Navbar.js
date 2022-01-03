import React from 'react'

const Navbar = () => {
    return (
        <div className="sm:px-2 bg-white sticky top-0 z-30 h-14 flex justify-between items-center px-8">
            <div className='sm:ml-2 h-16 w-16 p-1 ml-[5%]'>
                <div className='bg-no-repeat bg-cover bg-center bg-logo h-full w-full'></div>
            </div>

            <div className="flex h-full justify-center content-center items-center">

                <button className='lg:block hidden'>
                    <div className='h-7 w-10'>
                        <div className='bg-no-repeat bg-contain bg-center bg-camera h-full w-full'></div>
                    </div>
                </button>
                <button className="font-Dm rounded-md py-2 px-3 mr-1 text-black text-sm font-medium  hover:bg-slate-100"> Sign in</button>
                <button className="font-Dm rounded-md bg-[#FF7143] py-2 px-3 text-white text-sm font-medium hover:bg-orange-600	"> Sign up</button>

            </div>
        </div>
    )
}

export default Navbar;