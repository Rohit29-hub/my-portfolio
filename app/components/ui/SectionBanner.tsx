import React from 'react'

const SectionBanner = ({title}:{title:string}) => {
    return (
        <div className='px-3 py-2 border-b-2 rouned-2xl bg-white border-t-2 border-solid border-[#000000d8]  flex items-center'>
            <h1 className='text-4xl font-medium text-[#000000d8]'>{title}</h1>
        </div>
    )
}

export default SectionBanner