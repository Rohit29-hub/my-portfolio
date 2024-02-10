import React from 'react'
import Banner from './ui/Banner'
const TwoBanner = () => {
  return (
    <div className='lg:block hidden mt-5 w-full h-screen relative'>
      <div
        className='absolute rotate-me w-auto overflow-x-hidden sm:top-[-22rem] top-4 sm:left-[-10rem] h-auto flex flex-col gap-y-3 sm:gap-y-16'>
        <Banner title={"Developer & Coder Developer & Coder"}/>
        <Banner title={"Mern-stack developer Mern-stack developer"}/>
      </div>
    </div>
  )
}

export default TwoBanner