'use client'
import React from 'react'

interface Props {
  title: string;
}
const Banner = ({ title }: Props) => {
  return (
    <div className='w-[2800px] h-auto bg-white flex items-center justify-center border-b-4 border-t-4 border-solid border-[#000000d8]'
    >
      <h1 id='banner-title' className='text-8xl font-bold text-[#000000d8] uppercase flex-shrink'>{title}</h1>
    </div>
  )
}

export default Banner