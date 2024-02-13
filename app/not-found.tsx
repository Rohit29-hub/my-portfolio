import Link from 'next/link';
import React from 'react'

const notFound = () => {
  return (
    <div className='w-full h-screen grid place-content-center'>
        <h1 className='text-2xl font-bold py-2'>Page not found 😒</h1>
        <Link href={'/'} className='underline'>Back To Home</Link>
    </div>
  )
}

export default notFound;