"use client"
import Image from 'next/image'
import myMenu from '@/public/menu.svg'
import React from 'react'



const MenuButton = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Image className='cursor-pointer' onClick={() => setIsOpen(!isOpen)} src={myMenu} width={30} height={30} alt='' priority>

    </Image>
  )
}

export default MenuButton