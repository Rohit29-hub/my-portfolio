import React from 'react'
import LessThanIcon from '@/public/less-than.svg'
import Image from 'next/image'
const LessThanButton = ({ goToPrev }: { goToPrev: () => void }) => {
    return (
        <>
            <button onClick={() => goToPrev()} className='p-2 border border-solid rounded-[100%]'>
                <Image src={LessThanIcon} width={30} height={30} alt='go-prev' priority />
            </button>
        </>
    )
}

export default LessThanButton