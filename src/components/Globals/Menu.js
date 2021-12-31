import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const Menu = ({ activeState }) => {

    const postRef = useRef(null);
    const communityRef = useRef(null);
    const profileRef = useRef(null);

    useEffect(() => {
        if (activeState === "post") {
            postRef.current.style.borderBottom = '4px solid #FF0099';
        } else if (activeState === "community") {
            communityRef.current.style.borderBottom = '4px solid #FF0099';
        } else if (activeState === "profile") {
            profileRef.current.style.borderBottom = '4px solid #FF0099';
        }
    }, [postRef, communityRef, profileRef]);

    return (
        <div className='sm:order-2 sm:justify-center sm:sticky bottom-0 sm:bg-white sm:z-10 h-fit sticky top-0 flex justify-end'>
            <div className='sm:flex sm:w-full sm:justify-between sm:px-10 sm:py-1 sm:my-1 h-full w-32 mt-20'>

                <NavLink to="/new_thought" ref={postRef} className='sm:px-2 w-fit h-fit'>
                    <div className='sm:order-2 sm:mb-0 sm:h-8 sm:w-8 h-12  w-full p-0 mb-14 cursor-pointer'>
                        <div className='bg-new w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                        <p className='sm:hidden lg:text-sm text-base font-Dm text-center text-[#979797]'>New Thought</p>
                    </div>
                </NavLink>
                <NavLink to="/" ref={communityRef} className="sm:px-2 w-fit">
                    <div className='sm:order-1 sm:mb-0 sm:h-8 sm:w-8 h-12 w-full p-0 mb-14 cursor-pointer'>
                        <div className='bg-community w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                        <p className='sm:hidden lg:text-sm text-base font-Dm text-center text-[#979797]'>Community</p>
                    </div>
                </NavLink>
                <NavLink to="/profile" ref={profileRef} className="sm:px-2 w-fit ">
                    <div className='sm:order-3 sm:mb-0 sm:h-8 sm:w-8 h-12 w-full p-0 mb-14 cursor-pointer'>
                        <div className='bg-profile w-full h-full bg-no-repeat bg-contain bg-center'>
                        </div>
                        <p className='sm:hidden lg:text-sm text-base font-Dm text-center text-[#979797]'>Profile</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Menu;