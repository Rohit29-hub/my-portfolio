import React from 'react'
import LessThanButton from './ui/LessThanButton'
import GreaterThanButton from './ui/GreaterThanButton'
import projectData from '@/data/project.json'
import ProjectCard from './ui/ProjectCard'

const ProjectView = () => {

    return (
        <div className='w-full h-auto flex flex-col gap-y-10 lg:h-[80vh] mb-2 mt-12'>
            <div className='px-3 py-2 border-b-2 rouned-2xl bg-white border-t-2 border-solid border-[#000000d8]  flex items-center justify-between'>
                <h1 className='text-4xl font-medium text-[#000000d8]'>Project</h1>
                <div className='flex gap-x-2'>
                    <button className='p-2 border border-solid rounded-[100%]'><LessThanButton /></button>
                    <button className='p-2 border border-solid rounded-[100%]'><GreaterThanButton /></button>
                </div>
            </div>
            <div className='makeContainer productContainer w-full h-full flex sm:my-0 my-3 lg:grid lg:grid-cols-3  gap-2 overflow-x-scroll'>

                {
                    projectData.map((project) => (
                        <ProjectCard key={project.id} image={project.image} title={project.title} technologies={project.technologies} description={project.description} deploy_link={project.deploy_url} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectView


