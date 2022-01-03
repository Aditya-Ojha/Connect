import React, { useState } from 'react'

import { Confessions, DateIdeas, LDR, Rebound } from './Tags';

const User = () => {
    const [addTags, setAddTags] = useState(false);

    const [selectedTags, setSelectedTags] = useState([]);
    const [id, setId] = useState(0);

    const handleTags = () => {
        setAddTags(!addTags);
    }

    const updateTags = (Tag) => {
        let valid = true;
        for (let i = 0; i < selectedTags.length; i++) {
            if (selectedTags[i].type.name === Tag.type.name) {
                valid = false;
                return;
            }
        }

        if (valid) {
            setSelectedTags([...selectedTags, Tag]);
            setId(id + 1);
        }

    }

    const deleteTag = (id) => {
        setSelectedTags((tags) => {
            return tags.filter((tag, index) => {
                if (id !== tag.props.id) {
                    return tag;
                }
            })
        })
    }


    return (
        <div className='lg:mt-20 flex flex-col items-center mt-16 w-full min-h-[75%] bg-white pt-6 px-4 pb-4 rounded shadow-lg border-[#818181]'>

            {/* Profile Image */}
            <div className='sm:-mt-20 w-fit flex -mt-24'>
                <div className='sm:w-28 sm:h-28 w-36 h-36'>
                    <div className='bg-profile_photo w-full h-full bg-no-repeat bg-contain bg-center'>
                    </div>
                </div>
                <div className='sm:w-5 sm:h-5 sm:-ml-9 w-7 h-7 -ml-12'>
                    <div className='bg-add_a_photo w-full h-full bg-no-repeat bg-contain bg-center'>
                    </div>
                </div>
            </div>
            {/* Profile Data */}
            <h1 className='sm:text-xl text-3xl font-Dm font-medium'>Finn Norris</h1>

            <div className='flex flex-col items-center justify-between h-24 mt-4'>
                <div className='flex items-center'>
                    <div className='w-4 h-4 mr-1'>
                        <div className='bg-gender w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                    </div>
                    <h2 className='sm:text-base mr-2 font-Mulish font-semibold text-xl text-[#696871] tracking-wider'>Female</h2>

                    <div className='w-4 h-4 mr-1'>
                        <div className='bg-cake w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                    </div>
                    <h2 className='sm:text-base mr-2 font-Mulish font-semibold text-xl text-[#696871] tracking-wider'>28</h2>

                    <div className='w-4 h-4'>
                        <div className='bg-location w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                    </div>
                    <h2 className='sm:text-base font-Mulish font-semibold text-xl text-[#696871] tracking-wider'>Delhi</h2>
                </div>

                <div className='flex items-center'>
                    <div className='w-4 h-4 mr-1'>
                        <div className='bg-speak w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                    </div>
                    <h2 className='sm:text-base font-Mulish font-semibold text-xl text-[#696871] tracking-wider'>she/her</h2>
                </div>

                <div className='flex items-center'>
                    <div className='w-4 h-4 mr-1'>
                        <div className='bg-mail w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                    </div>
                    <h2 className='sm:text-base font-Mulish font-semibold text-xl text-[#696871] tracking-wider'>finnoris@gmail.com</h2>
                </div>
            </div>
            {/* Selected Tags */}
            <div className='sm:w-[95%] h-fit mt-4 w-[80%]'>
                <h2 className='sm:text-base text-black font-semibold font-Mulish text-xl mb-4'>Topics you follow:</h2>
                <div className='flex flex-col items-center w-full'>
                    <div className='flex max-w-full flex-wrap justify-center'>
                        {
                            selectedTags.map((tag) => (tag))
                        }
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-full px-6 h-fit mt-2 overflow-hidden'>
                <button onClick={handleTags}>
                    <div className='w-full bg-[#F0F0F0] px-4 py-1 flex items-center border border-[#999999] rounded-md'>
                        <input disabled className='sm:text-xs sm:placeholder:text-xs w-full cursor-pointer outline-none bg-[#F0F0F0] text-base text-[#666666] placeholder:font-Mulish placeholder:text-base' placeholder='Add more tags' />

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

                {
                    (addTags) ? (
                        <div className='h-40 w-full mt-4 overflow-y-auto bg-white rounded-md shadow-inner pt-4 px-4'>
                            <button className='block' onClick={() => { updateTags(<Confessions id={id} key={id} deleteTag={deleteTag} />) }}>
                                <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-6 border-2 border-[#FEC6E8] rounded-sm'>
                                    <div className='w-4 h-4 mr-2'>
                                        <div className='bg-notebook w-full h-full bg-no-repeat bg-contain bg-center'>
                                        </div>
                                    </div>
                                    <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Confessions</h4>
                                </div>
                            </button>
                            <button className='block' onClick={() => { updateTags(<DateIdeas id={id} key={id} deleteTag={deleteTag} />) }}>
                                <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-6 border-2 border-[#FEC6E8] rounded-sm'>
                                    <div className='w-4 h-4 mr-2'>
                                        <div className='bg-bulb w-full h-full bg-no-repeat bg-contain bg-center'>
                                        </div>
                                    </div>
                                    <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Date Ideas</h4>
                                </div>
                            </button>
                            <button className='block' onClick={() => { updateTags(<LDR id={id} key={id} deleteTag={deleteTag} />) }}>
                                <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-6 border-2 border-[#FEC6E8] rounded-sm'>
                                    <div className='w-4 h-4 mr-2'>
                                        <div className='bg-heart w-full h-full bg-no-repeat bg-contain bg-center'>
                                        </div>
                                    </div>
                                    <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Long Distance</h4>
                                </div>
                            </button>
                            <button className='block' onClick={() => { updateTags(<Rebound id={id} key={id} deleteTag={deleteTag} />) }}>
                                <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-6 border-2 border-[#FEC6E8] rounded-sm'>
                                    <div className='w-4 h-4 mr-2'>
                                        <div className='bg-notebook w-full h-full bg-no-repeat bg-contain bg-center'>
                                        </div>
                                    </div>
                                    <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Rebound</h4>
                                </div>
                            </button>
                        </div>) : (
                        null
                    )
                }

            </div>

            <div className='w-full flex justify-end mt-4'>
                <button className='sm:h-8 sm:w-20 bg-[#EB0090] h-10 w-24 rounded-md text-base font-Mulish font-normal text-white'>Save</button>

            </div>
        </div>
    )
}

export default User;