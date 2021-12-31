import React from 'react'

import Navbar from '../Globals/Navbar';
import Menu from '../Globals/Menu';
import Guidelines from '../Globals/Guidelines';
import User from './User';

const ProfileMain = () => {

    return (
        <>
            {/* Navbar */}
            <Navbar />
            <div className='bg-background min-h-screen'>
                <div className='sm:grid-cols-1 grid grid-cols-7 gap-1'>
                    {/* Side Menu */}
                    <Menu activeState="profile" />
                    <div className='sm:col-span-1 sm:pl-2 sm:order-1 col-span-6 pl-4'>

                        <div className='lg:pr-2 lg:mt-6 w-full mt-16 pr-16'>
                            <div className='grid grid-cols-3 lg:grid-cols-1 lg:gap-x-0   gap-4 h-full'>
                                {/* Profile Data */}
                                <div className='col-span-2 lg:order-2 h-full flex flex-col items-center pb-6'>
                                    <User />
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

export default ProfileMain