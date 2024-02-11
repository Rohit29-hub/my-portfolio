import React from 'react'
import githubIcon from '@/public/github.svg'
import instragramIcon from '@/public/instagram.svg'
import linkedinIcon from '@/public/linkedin.svg'
import Image from 'next/image'
import DownLoadButton from './ui/DownLoadButton'
const Introduction = () => {
    return (
        <div className='makeContainer w-full h-[61vh] lg:h-screen  sm:mt-10 mt-8'>
            <div className='relative w-full h-full'>
                <div className='absolute left-3 w-auto p-1 h-auto mt-8 sm:mt-0'>
                    <h1 className='sm:text-[9rem] text-[4rem] font-bold text-[#000000d8]' id='greet-1'>Hii all,</h1>
                    <h1 className='sm:text-[9rem] text-[3.5rem] sm:mt-[-3rem] font-bold text-[#000000d8]' id='greet-2'>I am Rohit <span id='hii-img' className='sm:text-[9rem] text-[3rem]'>👋</span></h1>
                    <div className='sm:w-96 md:w-[35rem] w-full h-auto mt-5'>
                        <p id='description-about-me' className='text-1xl sm:text-[19px] text-[#000000d8]'>
                            A passionate <span className='font-bold '>Full Stack Web Developer(MERN)</span>. having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Nextjs / Nodejs(Expressjs), Mongodb and some other cool libraries and frameworks.
                        </p>
                    </div>
                    <div className='flex gap-x-3 mt-5'>
                        <Image src={githubIcon} width={40} height={40} alt='' priority />
                        <Image src={instragramIcon} width={40} height={40} alt='' priority />
                        <Image src={linkedinIcon} width={40} height={40} alt='' priority />
                    </div>
                    <div className='mt-5 flex gap-x-3'>
                        <DownLoadButton text={"Download CV"} path={"https://www.rohitkohli.com"} />
                        <DownLoadButton text={"Contact Me"} path={"https://www.contactme.com"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction