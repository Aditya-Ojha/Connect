import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const Menu = ({ activeState }) => {

    const postRef = useRef(null);
    const communityRef = useRef(null);
    const profileRef = useRef(null);

    const [screenWidth, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); //cleanup toggles value, if unmounted
    }, [])
    
    useEffect(() => {
        if(postRef===null||communityRef===null||profileRef===null){
            return;
        }
        if (screenWidth < 639) {
            if (activeState === "post") {
                postRef.current.style.border = 'none';
                postRef.current.style.borderBottom = '4px solid #FF0099';
            } else if (activeState === "community") {
                communityRef.current.style.border = 'none';
                communityRef.current.style.borderBottom = '4px solid #FF0099';
            } else if (activeState === "profile") {
                profileRef.current.style.border = 'none';
                profileRef.current.style.borderBottom = '4px solid #FF0099';
            }
        } else {
            if (activeState === "post") {
                postRef.current.style.border = 'none';
                postRef.current.style.borderLeft = '4px solid #FF0099';
                postRef.current.style.color = 'black';
            } else if (activeState === "community") {
                communityRef.current.style.border = 'none';
                communityRef.current.style.borderLeft = '4px solid #FF0099';
                communityRef.current.style.color = 'black';
            } else if (activeState === "profile") {
                profileRef.current.style.border = 'none';
                profileRef.current.style.borderLeft = '4px solid #FF0099';
                profileRef.current.style.color = 'black';
            }
        }

    }, [postRef, communityRef, profileRef, screenWidth]);

    return (
        <div className='min_xl:justify-center sm:order-2 sm:justify-center sm:sticky bottom-0 sm:bg-white sm:z-10 h-fit sticky top-0 flex justify-end'>
            <div className='sm:flex sm:w-full sm:flex-row sm:justify-between sm:items-center sm:px-10 sm:py-1 sm:my-1 h-full w-32 mt-20 flex flex-col items-start'>

                <button ref={postRef} className='min_xl:pl-6 sm:px-2 sm:mb-0 pl-3 w-fit h-fit block mb-4 text-[#979797]'>
                    <NavLink to="/new_thought" >
                        <div className='sm:order-2 sm:mb-0 sm:h-8 sm:w-8 h-12  w-full mb-2 cursor-pointer'>
                            <div className='bg-new w-full h-full bg-no-repeat bg-contain bg-center'>
                            </div>
                        </div>
                        <p className='sm:hidden leading-none lg:text-sm text-base font-Dm text-center '>New Thought</p>
                    </NavLink>
                </button>
                <button ref={communityRef} className="min_xl:pl-6 sm:px-2 sm:mb-0 pl-3 w-fit block mb-4 text-[#979797]">
                    <NavLink to="/" >
                        <div className='sm:order-1 sm:mb-0 sm:h-8 sm:w-8 h-12 w-full p-0 mb-2 cursor-pointer'>
                            <div className='bg-community w-full h-full bg-no-repeat bg-contain bg-center'>
                            </div>
                        </div>
                        <p className='sm:hidden leading-none lg:text-sm text-base font-Dm text-center '>Community</p>
                    </NavLink>
                </button>
                <button ref={profileRef} className="min_xl:pl-12 sm:px-2  sm:mb-0 pl-6 w-fit block text-[#979797]">
                    <NavLink to="/profile" >
                        <div className='sm:order-3 sm:mb-0 sm:h-8 sm:w-8 h-12 w-full p-0 mb-2 cursor-pointer'>
                            <div className='bg-profile w-full h-full bg-no-repeat bg-contain bg-center'>
                            </div>
                        </div>
                        <p className='sm:hidden leading-none lg:text-sm text-base font-Dm text-center '>Profile</p>
                    </NavLink>
                </button>
            </div>
        </div>
    )
}

export default Menu;