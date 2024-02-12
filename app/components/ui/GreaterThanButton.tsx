import React from 'react'
import GreaterThanIcon from '@/public/greater-than.svg'
import Image from 'next/image'

const GreaterThanButton = ({ goToNext }: { goToNext: () => void }) => {
    return (
        <>
            <button onClick={() => goToNext()} className='p-2 border border-solid rounded-[100%]'>
                <Image src={GreaterThanIcon} width={30} height={30} alt='go-next' priority />
            </button>
        </>
    )
}

export default GreaterThanButton