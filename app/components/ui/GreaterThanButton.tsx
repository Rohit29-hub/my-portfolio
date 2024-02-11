import React from 'react'
import GreaterThanIcon from '@/public/greater-than.svg'
import Image from 'next/image'

const GreaterThanButton = () => {
    return (
        <>
            <Image src={GreaterThanIcon} width={30} height={30} alt='go-next' priority/>
        </>
    )
}

export default GreaterThanButton