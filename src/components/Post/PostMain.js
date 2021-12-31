import React from 'react'

import Navbar from '../Globals/Navbar';
import Menu from '../Globals/Menu';
import Guidelines from '../Globals/Guidelines';
import NewPost from './NewPost';

const PostMain = () => {


    return (
        <>
            {/* Navbar */}
            <Navbar />

            <div className='bg-background min-h-screen'>
                <div className='sm:grid-cols-1 grid grid-cols-7 gap-1'>
                    {/* Side Menu */}
                    <Menu activeState="post" />
                    <div className='sm:col-span-1 sm:pl-2 sm:order-1 col-span-6 pl-4'>

                        <div className='lg:pr-2 lg:mt-6 w-full mt-16 pr-16'>
                            <div className='grid grid-cols-3 lg:grid-cols-1 lg:gap-x-0   gap-4 h-full'>
                                {/* New Post */}
                                <div className='col-span-2 lg:order-2 h-screen flex flex-col items-center gap-y-6'>
                                    <NewPost />
                                </div>
                                {/* Right Content Guidelines */}
                                <div className='col-span-1 lg:order-1'>
                                    <Guidelines />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PostMain;