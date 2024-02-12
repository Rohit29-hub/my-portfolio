"use client"
import React from 'react'
import spotifyBack from '@/public/spotifyback.png'
import crudBack from '@/public/crud.png'
import amazonBack from '@/public/amazonBack.png'
import Image from 'next/image'
import LessThanButton from './ui/LessThanButton'
import GreaterThanButton from './ui/GreaterThanButton'

const ProjectView = () => {
    // show the data from api that good techniuqe for features
    return (
        <div className='w-full h-auto flex flex-col gap-y-10 lg:h-screen mb-2 mt-12'>
            <div className='px-2 py-2 border-b-2 rouned-2xl bg-white border-t-2 border-solid border-[#000000d8]  flex items-center justify-between'>
                <h1 className='text-4xl font-medium text-[#000000d8]'>Project</h1>
                <div className='flex gap-x-2'>
                    <button className='p-2 border border-solid rounded-[100%]' onClick={() => console.log('Prev')}><LessThanButton /></button>
                    <button className='p-2 border border-solid rounded-[100%]' onClick={() => console.log('Next')}><GreaterThanButton /></button>
                </div>
            </div>
            <div className='makeContainer productContainer w-full h-full flex lg:grid lg:grid-cols-3  gap-2 overflow-x-scroll'>
                <div className='h-96 flex-shrink-0 sm:h-full col-span-1 w-full border-2 border-solid border-[#000000d8] rounded-md relative overflow-hidden'>
                    <Image src={spotifyBack} fill={true} objectFit='contain' alt='spotify-clone' priority/>
                    <div className='w-full h-full absolute backdrop-blur-[5px]'>

                    </div>
                </div>
                <div className='h-96 flex-shrink-0 sm:h-full col-span-1 w-full border-2 border-solid border-[#000000d8] rounded-md relative overflow-hidden'>
                    <Image src={crudBack} fill={true} objectFit='contain' alt='crud-clone' priority/>
                    <div className='w-full h-full absolute backdrop-blur-[5px]'>

                    </div>
                </div>
                <div className='h-96 flex-shrink-0 sm:h-full col-span-1 w-full border-2 border-solid border-[#000000d8] rounded-md relative overflow-hidden'>
                    <Image src={amazonBack} fill={true} objectFit='contain' alt='amazon-clone' priority/>
                    <div className='w-full h-full absolute backdrop-blur-[5px]'>

                    </div> overflow-hidden
                </div>
            </div>
        </div>
    )
}

export default ProjectView