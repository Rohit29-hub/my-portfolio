"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props{
    text: string;
    path: string;
}
// update this
const DownLoadButton = ({ text, path }:Props) => {
    const router = useRouter();
  return (
    <button onClick={() => router.push(path)} type='button' className='py-2 px-3 bg-[#000000d8] rounded-lg text-white'>
        {text}
    </button>
  )
}

export default DownLoadButton