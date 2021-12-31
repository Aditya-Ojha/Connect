import React from 'react'

export const Confessions = (props) => {
    return (
        <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-2 mr-2 border-2 border-[#FEC6E8] rounded-sm'>
            <div className='w-4 h-4 mr-2'>
                <div className='bg-notebook w-full h-full bg-no-repeat bg-contain bg-center'>
                </div>
            </div>
            <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Confessions</h4>
            <button onClick={()=>{props.deleteTag(props.id)}}>
                <div className='w-4 h-4'>
                    <div className='bg-cancel w-full h-full bg-no-repeat bg-contain bg-center'>
                    </div>
                </div>
            </button>
        </div>
    )
}

export const DateIdeas = (props) => {
    return (
        <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-2 mr-2 border-2 border-[#FEC6E8] rounded-sm'>
            <div className='w-4 h-4 mr-2'>
                <div className='bg-bulb w-full h-full bg-no-repeat bg-contain bg-center'>
                </div>
            </div>
            <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Date Ideas</h4>
            <button onClick={()=>{props.deleteTag(props.id)}}>
                <div className='w-4 h-4'>
                    <div className='bg-cancel w-full h-full bg-no-repeat bg-contain bg-center'>
                    </div>
                </div>
            </button>
        </div>
    )
}

export const LDR = (props) => {
    return (
        <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-2 mr-2 border-2 border-[#FEC6E8] rounded-sm'>
            <div className='w-4 h-4 mr-2'>
                <div className='bg-heart w-full h-full bg-no-repeat bg-contain bg-center'>
                </div>
            </div>
            <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Long Distance</h4>
            <button onClick={()=>{props.deleteTag(props.id)}}>
                <div className='w-4 h-4'>
                    <div className='bg-cancel w-full h-full bg-no-repeat bg-contain bg-center'>
                    </div>
                </div>
            </button>
        </div>
    )
}

export const Rebound = (props) => {
    return (
        <div className='flex justify-between items-center h-5 w-fit px-2 py-3 mb-2 mr-2 border-2 border-[#FEC6E8] rounded-sm'>
            <div className='w-4 h-4 mr-2'>
                <div className='bg-sphere w-full h-full bg-no-repeat bg-contain bg-center'>
                </div>
            </div>
            <h4 className='font-Mulish font-normal mr-2 text-xs text-black'>Rebound</h4>
            <button onClick={()=>{props.deleteTag(props.id)}}>
                <div className='w-4 h-4'>
                    <div className='bg-cancel w-full h-full bg-no-repeat bg-contain bg-center'>
                    </div>
                </div>
            </button>
        </div>
    )
}