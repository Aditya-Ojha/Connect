import React, { useState } from 'react'

const Post = () => {

    const [comment, setComment] = useState(false);

    return (
        <div className='sm:px-4 h-fit bg-white w-full px-12 py-3 rounded-md overflow-hidden'>

            <div className='h-full w-full flex flex-col items-start'>

                <div className='flex items-center mb-5 w-full justify-between'>
                    <div className='flex justify-between w-fit px-1 py-0.5 items-center gap-x-2 border border-[#FEC6E8] rounded-sm'>
                        <div className='w-4 h-3'>
                            <div className='bg-heart w-full h-full bg-no-repeat bg-contain bg-center'>
                            </div>
                        </div>
                        <h4 className='text-xs font-Mulish font-normal'>Long Distance</h4>
                    </div>
                    <button className='-mr-1.5 -mb-6'>
                        <div className='w-1 h-4'>
                            <div className='bg-option w-full h-full bg-no-repeat bg-contain bg-center'>
                            </div>
                        </div>
                    </button>
                </div>

                <div className='flex justify-center items-center mb-2'>
                    <div className='w-14 h-12'>
                        <div className='bg-avatar w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h2 className='sm:text-base font-medium font-Dm text-lg text-[#081F32]'>Finn Norris</h2>
                        <h2 className='sm:text-base font-normal font-Mulish text-lg text-[#3F3D56]'>22/M/Delhi</h2>
                    </div>
                </div>

                <div className='h-fit mb-2'>
                    <p className='sm:text-base font-normal font-Mulish text-black text-lg'>Really enjoyed  the course. I felt like I was getting  what you  had advertised online and much more! Really enjoyed the course. </p>
                </div>

                <div className='flex justify-between items-center w-full mb-3.5'>
                    <div className='flex items-center'>
                        <button>
                            <div className='w-6 h-6'>
                                <div className='bg-outline-heart w-full h-full bg-no-repeat bg-contain bg-center'>
                                </div>
                            </div>
                        </button>
                        <h2 className='sm:text-sm ml-2 text-base font-Dm font-normal'>3</h2>
                        <button onClick={()=>{setComment(!comment)}}>
                            <div className='w-6 h-6 ml-4'>
                                <div className='bg-message w-full h-full bg-no-repeat bg-contain bg-center'>
                                </div>
                            </div>
                        </button>
                        <h2 className='sm:text-sm ml-2 text-base font-Dm font-normal'>3</h2>
                    </div>
                    <div className='flex items-center '>
                        <button>
                            <div className='w-6 h-6'>
                                <div className='bg-share w-full h-full bg-no-repeat bg-contain bg-center'>
                                </div>
                            </div>
                        </button>
                        <h2 className='sm:text-sm ml-2 text-base font-Dm font-normal'>3</h2>
                    </div>
                </div>

                {/* Message Box*/}
                {
                    (comment) ? (
                        <>
                            <div className='w-full h-px mb-2.5 bg-black'></div>
                            <div className='h-full w-full flex flex-col items-start mb-2.5 py-2 px-3 bg-[#FFDEF2] rounded-md'>
                                <div className='flex justify-center items-center mb-2'>
                                    <div className='w-14 h-12'>
                                        <div className='bg-avatar w-full h-full bg-no-repeat bg-contain bg-center'>
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <h2 className='sm:text-base font-medium font-Dm text-lg text-[#081F32]'>Finn Norris</h2>
                                        <h2 className='sm:text-base font-light font-Mulish text-lg text-[#3F3D56]'>22/M/Delhi</h2>
                                    </div>
                                </div>

                                <div className='h-fit'>
                                    <p className='sm:text-base font-light font-Mulish text-black text-lg'>Really enjoyed  the course. I felt like I was getting  what you  had advertised online and much more! Really enjoyed the course. </p>
                                </div>
                            </div>
                            <div className='h-full w-full flex flex-col items-start mb-2.5 py-2 px-3 bg-[#FFDEF2] rounded-md'>
                                <div className='flex justify-center items-center mb-2'>
                                    <div className='w-14 h-12'>
                                        <div className='bg-avatar w-full h-full bg-no-repeat bg-contain bg-center'>
                                        </div>
                                    </div>
                                    <div className='ml-4'>
                                        <h2 className='sm:text-base font-medium font-Dm text-lg text-[#081F32]'>Finn Norris</h2>
                                        <h2 className='sm:text-base font-light font-Mulish text-lg text-[#3F3D56]'>22/M/Delhi</h2>
                                    </div>
                                </div>

                                <div className='h-fit'>
                                    <p className='sm:text-base font-light font-Mulish text-black text-lg'>Really enjoyed  the course. I felt like I was getting  what you  had advertised online and much more! Really enjoyed the course. </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        null
                    )
                }

                {/* Input Field Comment */}
                <div className='w-full h-8 flex items-center border-2 border-[#FEC6E8] rounded px-3.5'>
                    <input className='outline-none font-Mulish text-base w-full h-full placeholder:font-normal placeholder:font-Mulish placeholder:text-base placeholder:text-[#464242]' placeholder='Type your comment here...' />
                    <div className='w-6 h-6'>
                        <div className='bg-send w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Post;