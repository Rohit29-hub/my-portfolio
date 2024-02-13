"use client"
import Link from 'next/link'
import React from 'react'
interface Props{
    text: string;
}
// update this
const DownLoadButton = ({ text}:Props) => {
  return (
    <Link target='__blank' href={'/resume.pdf'} download={'resume.pdf'} className='py-2 px-3 bg-[#000000d8] rounded-lg text-white'>
        {text}
    </Link>
  )
}

export default DownLoadButton