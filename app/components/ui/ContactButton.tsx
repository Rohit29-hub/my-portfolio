import React from 'react'
import Link from 'next/link'

const ContactButton = ({ text,path }: { text: string,path: string }) => {
    return (
        <Link href={path} className='py-2 px-3 bg-[#000000d8] rounded-lg text-white'>
            {text}
        </Link>
    )
}

export default ContactButton