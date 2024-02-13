"use client"
import React from 'react'
import SectionBanner from './ui/SectionBanner'
import { formAction } from '@/actions/formAction'
import FormButton from './ui/FormButton'
import toast from 'react-hot-toast'

const  Contact = () => {
    const handleForm = async (formData: FormData) => {
        await formAction(formData);
        toast.success('Thanks user! Your form is submitted.');
    }

    return (
        <div className='w-full h-auto lg:mt-12 sm:mt-10 mt-6'>
            <SectionBanner title={"Contact"} />
            <div className='w-full h-auto mt-2 py-1'>
                <form action={handleForm} className="px-2 lg:px-8 md:px-6 sm:px-3">
                    <div className="mb-4">
                        <label className="block pl-1 text-[#000000d8] text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="appearance-none border-b-2 border-gray-300 border-solid rounded w-full p-3 text-gray-700 leading-tight focus:outline focus:shadow-outline" id="name" type="text" name='username' placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                        <label className="block pl-1 text-[#000000d8] text-sm font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <input className="appearance-none border-b-2 border-gray-300 border-solid rounded w-full p-3 text-gray-700 leading-tight focus:outline focus:shadow-outline" id="phone" type="tel" name='phone' placeholder="Enter your phone number" />
                    </div>
                    <div className="mb-4">
                        <label className="block pl-1 text-[#000000d8] text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="appearance-none border-b-2 border-gray-300 border-solid rounded w-full p-3 text-gray-700 leading-tight focus:outline focus:shadow-outline" id="email" type="email" name='email' placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                        <label className="block pl-1 text-[#000000d8] text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea className="appearance-none border-b-2 border-gray-300 border-solid rounded w-full p-3 text-gray-700 leading-tight focus:outline focus:shadow-outline" id="message" name='message' placeholder="Enter your message"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <FormButton/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact