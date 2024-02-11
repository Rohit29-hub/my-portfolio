import React from 'react'
import LessThanIcon from '@/public/less-than.svg'
import Image from 'next/image'
const LessThanButton = () => {
    return (
        <>
            <Image src={LessThanIcon} width={30} height={30} alt='go-prev' priority/>
        </>
    )
}

export default LessThanButton