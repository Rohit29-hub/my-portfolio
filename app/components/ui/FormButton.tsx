"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'
const FormButton = () => {
    const {pending} = useFormStatus()
    return (
        <button className="bg-[#000000d8] hover:bg-[#131313d8] text-white font-bold px-4 py-2 rounded focus:outline-none focus:shadow-outline" type="submit" aria-disabled={pending}>
            {
                pending ? 'Sending...' : 'Submit'
            }
        </button>
    )
}

export default FormButton