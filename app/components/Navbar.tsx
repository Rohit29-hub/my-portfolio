import Image from 'next/image'
import myLogo from '@/public/logo.jpeg'
import React from 'react'
import MenuButton from './ui/MenuButton'
const Navbar = () => {
  return (
    <div className='makeContainer w-full h-12 sticky top-2 z-[1059] backdrop-blur-[30px] rounded-[3rem]'>
        <div className='w-full bg-[#ffffffb7] shadow sm:m-auto m-0 rounded-[3rem] h-full  flex justify-between p-1'>
            <div className='w-auto h-full flex gap-x-2'>
                <div className='w-10 h-full rounded-[100%] bg-[#333333] overflow-hidden'>
                  <Image src={myLogo} width={100} height={100} priority alt=''/>
                </div>
                <div className='flex flex-col gap-y-1 h-full justify-center'>
                    <h1 id='my-name' className='font-bold uppercase'>Rohit kohli</h1>
                    <p id='short-desc' className='mt-[-8px] text-[#856A6A]'>Full-stack developer</p>
                </div>
            </div>
            <div className='w-auto flex items-center justify-center mr-2'>
                <MenuButton/>
            </div>
        </div>
    </div>
  )
}

export default Navbar