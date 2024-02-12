import React from 'react'
import DownLoadButton from './DownLoadButton'

interface Props{
    image: string,
    title: string,
    technologies: string[],
    description: string,
    deploy_link: string
}
const ProjectCard = ({image,title,technologies,description,deploy_link}:Props) => {
    return (
        <div className='h-auto flex-shrink-0 sm:h-full col-span-1 w-full border-2 border-solid border-[#000000d8] rounded-md relative overflow-hidden'>
            <img className='w-full h-full object-contain' src={`${image}`} alt={title}/>
            <div className='px-2 w-full h-full absolute bg-[#ffffffa1] backdrop-blur-[5px] top-2 sm:space-y-3 space-y-6'>
                <h1 className='text-5xl font-bold text-[#000000d8]'>{title}</h1>
                <p className=''>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        technologies.map((tech,index) => (
                            <span key={index} className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>{tech}</span>
                        ))
                    }
                </div>
                <div className='flex gap-x-3'>
                    <div className='inline-block'>
                        <DownLoadButton text='Github repo' path='https://www.github.com/Rohit29-hub'/>
                    </div>
                    <div className='inline-block'>
                        <DownLoadButton text="Live demo" path={deploy_link}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard