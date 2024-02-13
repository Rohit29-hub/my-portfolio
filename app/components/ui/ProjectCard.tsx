import React from 'react'
import {ProjectButtonGithub,ProjectButtonLiveDemo} from './ProjectButton'

interface Props{
    image: string,
    title: string,
    technologies: string[],
    description: string,
    deploy_link: string
}
const ProjectCard = ({image,title,technologies,description,deploy_link}:Props) => {
    return (
        <div className='h-auto flex-shrink-0 sm:h-full col-span-1 w-full border-2 border-solid py-4 border-[#000000d8] rounded-md relative overflow-hidden'>
            <img className='w-full h-full object-contain absolute top-6 sm:relative' src={`${image}`} alt={title}/>
            <div className='px-2 w-full h-full relative sm:absolute bg-[#ffffffa1] backdrop-blur-[5px] top-2 sm:space-y-3 space-y-6'>
                <h1 className='text-5xl font-bold text-[#000000d8]'>{title}</h1>
                <p className='text-[#000000d8]'>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        technologies.map((tech,index) => (
                            <span key={index} className='bg-gray-400 text-[#000000d8] text-xs font-medium me-2 px-2.5 py-0.5 rounded'>{tech}</span>
                        ))
                    }
                </div>
                <div className='flex gap-x-3'>
                    <div className='inline-block'>
                        <ProjectButtonGithub text='Github' link='https://www.github.com/Rohit29-hub'/>
                    </div>
                    <div className='inline-block'>
                        <ProjectButtonLiveDemo  text="Live demo" link={deploy_link}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard