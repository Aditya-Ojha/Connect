import React from 'react'

const Guidelines = () => {
    return (
        <div className=' w-full h-fit'>

            <div className='lg:items-start lg:pb-4 lg:pt-0 lg:px-4 w-full h-fit py-10 px-9 bg-white flex flex-col justify-center items-start rounded-md overflow-hidden'>
                <div className='flex items-center w-fit'>
                    <div className='lg:w-20 lg:h-24  w-16 h-20'>
                        <div className='lg:mt-[46px] bg-myra w-full h-full bg-no-repeat bg-cover bg-center'>
                        </div>
                    </div>
                    <div className='lg:ml-4 ml-1'>
                        <h4 className='text-lg font-Dm font-medium text-black'>Myra</h4>
                        <p className='text-lg font-Mulish font-normal text-black'>@admin</p>
                    </div>
                </div>

                <div className='lg:ml-24 lg:-mt-4 mt-7 font-Mulish font-normal w-fit h-fit'>
                    <h4 className='underline'>Guidelines</h4>
                    <p> https://www.instagram.com/
                        candid.connection/</p>
                    <p> https://www.instagram.com/
                        candid.connection/</p>
                </div>
            </div>

            <div className='lg:hidden bg-white h-fit w-full mt-7 py-6 px-16 flex flex-col items-center rounded-md overflow-hidden'>
                <div className='w-52 h-40'>
                    <div className='bg-video w-full h-full bg-no-repeat bg-contain bg-center'>
                    </div>
                </div>
                <button className='w-52 h-14 mt-5 bg-[#EB0090] rounded-xl text-white font-Dm font-bold text-lg'>
                    Video Date
                </button>
            </div>
        </div>
    )
}

export default Guidelines;