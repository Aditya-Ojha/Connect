import React, { useState } from 'react'
import './style.css';

const NewPost = () => {
    const [addTags, setAddTags] = useState(false);

    const handleTags = () => {
        setAddTags(!addTags);
    }

    return (
        <div className='flex flex-col justify-between w-full min-h-[75%] bg-white rounded-md pt-6 px-4 pb-4'>
            <h1 className='sm:text-lg font-Dm font-medium text-[#081F32] text-2xl'>New Post</h1>

            <div className='flex flex-col justify-between mb-6 mt-2 h-full py-3 px-6 rounded-md shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]'>
                <textarea className='sm:text-base sm:placeholder:text-base w-full h-full outline-none resize-none font-Mulish font-normal text-lg placeholder:font-Mulish placeholder:text-[#696871] placeholder:text-lg' placeholder='Tell us what you feel...'>
                </textarea>
                <button onClick={handleTags}>
                    <div className='w-full bg-[#F0F0F0] px-4 py-1 flex items-center border border-[#999999] rounded-md'>
                        <input className=' w-full outline-none bg-[#F0F0F0] text-base text-[#666666] placeholder:font-Mulish placeholder:text-base' placeholder='Add tags (at max 3)' />

                        <div className='w-3.5 h-1'>
                            {
                                (addTags) ? (
                                    <div className='bg-open w-full h-full bg-no-repeat bg-contain bg-center'>
                                    </div>
                                ) : (
                                    <div className='bg-close w-full h-full bg-no-repeat bg-contain bg-center'>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </button>

                {/* Add tags open */}
                {
                    (addTags) ? (
                        <div className='h-60 w-full mt-4 overflow-y-auto bg-white rounded-md shadow-inner pt-4 px-4'>
                            <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-6 border-2 border-[#FEC6E8] rounded-sm'>
                                <div className='w-4 h-4 mr-2'>
                                    <div className='bg-notebook w-full h-full bg-no-repeat bg-contain bg-center'>
                                    </div>
                                </div>
                                <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Confessions</h4>
                                <div className='w-4 h-4'>
                                    <div className='bg-cancel w-full h-full bg-no-repeat bg-contain bg-center'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-6 border-2 border-[#FEC6E8] rounded-sm'>
                                <div className='w-4 h-4 mr-2'>
                                    <div className='bg-bulb w-full h-full bg-no-repeat bg-contain bg-center'>
                                    </div>
                                </div>
                                <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Date Ideas</h4>
                                <div className='w-4 h-4'>
                                    <div className='bg-cancel w-full h-full bg-no-repeat bg-contain bg-center'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-6 border-2 border-[#FEC6E8] rounded-sm'>
                                <div className='w-4 h-4 mr-2'>
                                    <div className='bg-heart w-full h-full bg-no-repeat bg-contain bg-center'>
                                    </div>
                                </div>
                                <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Long Distance</h4>
                                <div className='w-4 h-4'>
                                    <div className='bg-cancel w-full h-full bg-no-repeat bg-contain bg-center'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-6 border-2 border-[#FEC6E8] rounded-sm'>
                                <div className='w-4 h-4 mr-2'>
                                    <div className='bg-notebook w-full h-full bg-no-repeat bg-contain bg-center'>
                                    </div>
                                </div>
                                <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Confessions</h4>
                                <div className='w-4 h-4'>
                                    <div className='bg-cancel w-full h-full bg-no-repeat bg-contain bg-center'>
                                    </div>
                                </div>
                            </div>
                        </div>) : (
                        null
                    )
                }

            </div>

            <div className='w-full flex justify-between items-center'>
                <div className=" w-fit">
                    <label className="flex items-center cursor-pointer">
                        {/* <!-- toggle --> */}
                        <div className="relative">
                            {/* <!-- input --> */}
                            <input type="checkbox" id="toggleB" className="sr-only" />
                            {/* <!-- line --> */}
                            <div className="sm:w-16 sm:h-8 switch block bg-[#EFEFEF] shadow-[inset_0px_6px_8px_3px_rgba(0,0,0,0.1)] w-20 h-10 rounded-full"></div>
                            {/* <!-- dot --> */}
                            <div className="sm:w-6 sm:h-6 dot absolute left-1 top-1 w-8 h-8 bg-gradient-to-b from-[#FFFFFF] to-[#E8EAEA] rounded-full transition"></div>
                        </div>
                        {/* <!-- label --> */}
                        <div className="sm:text-sm ml-3 text-[#696871] font-normal font-Mulish text-lg cursor-default	">
                            Post as Anonymos
                        </div>
                    </label>
                </div>

                <div className='flex items-center'>
                    <button>
                        <div className='w-4 h-6'>
                            <div className='bg-pin w-full h-full bg-no-repeat bg-contain bg-center'>
                            </div>
                        </div>
                    </button>
                    <button className='sm:text-sm sm:w-24 sm:h-8 h-10 w-28 ml-6 bg-[#EFEFEF] rounded-md text-lg text-[#696871] font-Mulish font-normal hover:bg-[#FF0099] hover:text-[white] hover:font-bold'>
                        POST
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewPost;