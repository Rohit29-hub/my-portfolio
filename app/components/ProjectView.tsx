"use client"
import React, {useRef } from 'react'
import LessThanButton from './ui/LessThanButton'
import GreaterThanButton from './ui/GreaterThanButton'
import projectData from '@/data/project.json'
import ProjectCard from './ui/ProjectCard'
import ContactButton from './ui/ContactButton'

const ProjectView = () => {
    const productContainer = useRef<HTMLDivElement>(null);

    function goToPrev() {
        const container = productContainer.current;
        if(container != null) container.scrollLeft -= window.innerWidth;
    }

    function goToNext(){
        const container = productContainer.current;
        if(container != null) container.scrollLeft += window.innerWidth - 10;
    }

    return (
        <div className='w-full h-auto flex flex-col gap-y-10 lg:h-[50rem] mb-2 mt-8'>
            <div className='px-3 py-2 border-b-2 rouned-2xl bg-white border-t-2 border-solid border-[#000000d8]  flex items-center justify-between'>
                <h1 className='text-4xl font-medium text-[#000000d8]'>Project</h1>
                <div className='flex gap-x-2 md:hidden'>
                    <LessThanButton goToPrev={goToPrev}/>  
                    <GreaterThanButton goToNext={goToNext}/>
                </div>
            </div>
            <div className='makeContainer productContainer w-full h-full md:grid sm:my-0 my-3 flex md:grid-cols-2 lg:grid-cols-3 gap-2 overflow-x-scroll scroll-smooth' ref={productContainer}>
                {
                    projectData.map((project) => (
                        <ProjectCard key={project.id} image={project.image} title={project.title} technologies={project.technologies} description={project.description} deploy_link={project.deploy_url} />
                    ))
                }

                <div className='h-auto flex-shrink-0 sm:h-full col-span-1 flex items-center justify-center w-full border-2 border-solid py-4 border-[#000000d8] rounded-md relative overflow-hidden'>
                    <ContactButton text='More Project on Github' path='https://www.github.com/Rohit29-hub/'/>
                </div>
            </div>
        </div>
    )
}

export default ProjectView


