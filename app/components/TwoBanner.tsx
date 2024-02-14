import React from 'react'
import Banner from './ui/Banner'
import Image from 'next/image'
import HeroImg from '@/public/hero.svg'
const TwoBanner = () => {
  return (
    <div className='mt-5 w-full lg:h-screen h-min relative lg:overflow-visible overflow-hidden'>
      <div className='lg:absolute lg:right-12 lg:top-[-1rem] md:right-12 md:mt-0 mt-[-5rem]'>
        <Image className='grayscale' src={HeroImg} width={600} height={550} alt='' priority/>
      </div>
      <div
        className='lg:flex hidden absolute rotate-me w-auto overflow-x-hidden sm:top-[-22rem] top-4 sm:left-[-10rem] h-auto flex-col gap-y-3 sm:gap-y-16'>
        <Banner title={"Developer & Coder Developer & Coder"}/>
        <Banner title={"Mern-stack developer Mern-stack developer"}/>
      </div>
    </div>
  )
}

export default TwoBanner