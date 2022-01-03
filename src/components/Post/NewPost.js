import React, { useState, useEffect, useRef } from 'react'
import './style.css';

import { Confessions, DateIdeas, LDR, Rebound } from './Tags';

const NewPost = () => {

    const [addTags, setAddTags] = useState(false);
    const handleTags = () => {
        setAddTags(!addTags);
    }


    const [selectedTags, setSelectedTags] = useState([]);
    const [id, setId] = useState(0);

    const updateTags = (Tag) => {
        let valid = true;
        for (let i = 0; i < selectedTags.length; i++) {
            if (selectedTags[i].type.name === Tag.type.name) {
                valid = false;
                return;
            }
        }

        if (valid && selectedTags.length < 3) {
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


    const [postData, setPostData] = useState('');
    const btnPost = useRef(null);
    useEffect(() => {
        let withoutSpace = postData.replace(/ /g, "");
        if (withoutSpace.length > 0) {
            btnPost.current.style.backgroundColor = '#FF0099';
            btnPost.current.style.color = 'white';
            btnPost.current.style.fontWeight = 'bold';
        } else {
            btnPost.current.style.backgroundColor = '#EFEFEF';
            btnPost.current.style.color = '#696871';
            btnPost.current.style.fontWeight = 'normal';
        }
    }, [postData])

    return (
        <div className='flex flex-col justify-between w-full min-h-[75%] bg-white rounded-md pt-6 px-4 pb-4'>
            <h1 className='sm:text-lg font-Dm font-medium text-[#081F32] text-2xl'>New Post</h1>

            <div className='flex flex-col justify-between mb-6 mt-2 h-full py-3 px-6 rounded-md shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]'>
                <textarea value={postData} onChange={(e) => { setPostData(e.target.value) }} className='sm:text-base sm:placeholder:text-base w-full h-full outline-none resize-none font-Mulish font-normal text-lg placeholder:font-Mulish placeholder:text-[#696871] placeholder:text-lg' placeholder='Tell us what you feel...'>
                </textarea>

                <div className='w-full'>
                    <div className='w-full flex flex-wrap'>
                        {
                            selectedTags.map((tag) => (
                                tag
                            ))
                        }
                    </div>
                    <button onClick={handleTags} className='w-full'>
                        <div className='w-full  bg-[#F0F0F0] px-4 py-1 flex items-center border border-[#999999] rounded-md' placeholder='Add tags (at max 3)'>
                            <input disabled className=' w-full outline-none cursor-pointer bg-[#F0F0F0] text-base text-[#666666] placeholder:font-Mulish placeholder:text-base' placeholder='Add tags (at max 3)' />
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
                </div>

                {/* Add tags open */}
                {
                    (addTags) ? (
                        <div className='h-60 w-full mt-4 overflow-y-auto bg-white rounded-md shadow-inner pt-4 px-4 flex flex-col'>
                            <button onClick={() => { updateTags(<Confessions id={id} key={id} deleteTag={deleteTag} />) }}>
                                <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-6 border-2 border-[#FEC6E8] rounded-sm'>
                                    <div className='w-4 h-4 mr-2'>
                                        <div className='bg-notebook w-full h-full bg-no-repeat bg-contain bg-center'>
                                        </div>
                                    </div>
                                    <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Confessions</h4>
                                </div>
                            </button>
                            <button onClick={() => { updateTags(<DateIdeas id={id} key={id} deleteTag={deleteTag} />) }}>
                                <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-6 border-2 border-[#FEC6E8] rounded-sm'>
                                    <div className='w-4 h-4 mr-2'>
                                        <div className='bg-bulb w-full h-full bg-no-repeat bg-contain bg-center'>
                                        </div>
                                    </div>
                                    <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Date Ideas</h4>
                                </div>
                            </button>
                            <button onClick={() => { updateTags(<LDR id={id} key={id} deleteTag={deleteTag} />) }}>
                                <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-6 border-2 border-[#FEC6E8] rounded-sm'>
                                    <div className='w-4 h-4 mr-2'>
                                        <div className='bg-heart w-full h-full bg-no-repeat bg-contain bg-center'>
                                        </div>
                                    </div>
                                    <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Long Distance</h4>
                                </div>
                            </button>
                            <button onClick={() => { updateTags(<Rebound id={id} key={id} deleteTag={deleteTag} />) }}>
                                <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-6 border-2 border-[#FEC6E8] rounded-sm'>
                                    <div className='w-4 h-4 mr-2'>
                                        <div className='bg-sphere w-full h-full bg-no-repeat bg-contain bg-center'>
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

            <div className='w-full flex justify-between items-center'>
                <div className=" w-fit flex items-center">
                    <label className="flex items-center ">
                        {/* <!-- toggle --> */}
                        <div className="relative cursor-pointer">
                            {/* <!-- input --> */}
                            <input type="checkbox" id="toggleB" className="sr-only" />
                            {/* <!-- line --> */}
                            <div className="sm:w-16 sm:h-8 switch block bg-[#EFEFEF] shadow-[inset_0px_6px_8px_3px_rgba(0,0,0,0.1)] w-20 h-10 rounded-full"></div>
                            {/* <!-- dot --> */}
                            <div className="sm:w-6 sm:h-6 dot absolute left-1 top-1 w-8 h-8 bg-gradient-to-b from-[#FFFFFF] to-[#E8EAEA] rounded-full transition"></div>
                        </div>
                        {/* <!-- label --> */}
                    </label>
                    <div className="sm:text-sm ml-3 text-[#696871] font-normal font-Mulish text-lg	">
                        Post as Anonymos
                    </div>
                </div>

                <div className='flex items-center'>
                    <button>
                        <div className='w-4 h-6'>
                            <div className='bg-pin w-full h-full bg-no-repeat bg-contain bg-center'>
                            </div>
                        </div>
                    </button>
                    <button ref={btnPost} className='sm:text-sm sm:w-24 sm:h-8 h-10 w-28 ml-6 bg-[#EFEFEF] rounded-md text-lg text-[#696871] font-Mulish font-normal'>
                        POST
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewPost;