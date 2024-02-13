import { useRouter } from 'next/navigation'
import { FaGithub } from 'react-icons/fa'
import { IoIosEyeOff } from 'react-icons/io'
import React from 'react'

interface Props {
  link: string,
  text: string
}

const ProjectButtonLiveDemo = ({ link, text }: Props) => {
  const router = useRouter();
  return (
    <button className='flex text-white items-center py-1 px-3 space-x-2 justify-between rounded-md bg-[#000000d8]' onClick={() => router.push(link)}>
      <IoIosEyeOff />
      <span>{text}</span>
    </button>
  )
}

const ProjectButtonGithub = ({ link, text }: Props) => {
  const router = useRouter();
  return (
    <button className='flex text-white items-center py-1 space-x-2 px-3 rounded-md bg-[#000000d8]' onClick={() => router.push(link)}>
      <FaGithub />
      <span>{text}</span>
    </button>
  )
}

export  { ProjectButtonGithub, ProjectButtonLiveDemo }