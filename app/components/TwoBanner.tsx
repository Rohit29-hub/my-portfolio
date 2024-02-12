import React from 'react'
import Banner from './ui/Banner'
import Image from 'next/image'
import HeroImg from '@/public/hero.svg'
const TwoBanner = () => {
  return (
    <div className='lg:block hidden mt-5 w-full h-screen relative'>
      <div className='absolute right-12 top-[-4rem]'>
        <Image className='grayscale' src={HeroImg} width={600} height={550} alt='' priority/>
      </div>
      <div
        className='absolute rotate-me w-auto overflow-x-hidden sm:top-[-22rem] top-4 sm:left-[-10rem] h-auto flex flex-col gap-y-3 sm:gap-y-16'>
        <Banner title={"Developer & Coder Developer & Coder"}/>
        <Banner title={"Mern-stack developer Mern-stack developer"}/>
      </div>
    </div>
  )
}

export default TwoBanner