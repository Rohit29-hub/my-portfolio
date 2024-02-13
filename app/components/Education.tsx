import React from 'react'
import SectionBanner from './ui/SectionBanner'
import Image from 'next/image'

const Education = () => {
    return (
        <div className='w-full h-auto lg:mt-12 sm:mt-10 mt-6 '>
            <SectionBanner title={"Education"} />
            <div className='lg:mt-[2.4rem] mt-4  flex flex-col gap-y-2'>
                <div className=''>
                    <div className='bg-[#000000d8]'>
                        <Image className='py-1.5' src={'https://liet.in/images/lloyd_eng/website/img/logo/liet_engineering_1.png'} width={400} height={300} alt='college' priority />
                    </div>
                    <div className='mt-1.5 py-3 border-t text-[#000000d8] border-solid'>
                        <li className='educationText text-1xl font-semibold text-[#000000d8] pl-4 list-disc'>Diploma: Computer Science & Engineering</li>
                        <li className='educationText text-1xl font-semibold text-[#000000d8] pl-4 list-disc'>Batch: 2022 - 2025</li>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Education