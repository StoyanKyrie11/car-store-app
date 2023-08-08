"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Modal } from '@components'
import { useState } from 'react'

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <header className='w-full absolute z-10'>
            <nav className='flex max-w-[1440px] mx-auto justify-between items-center sm:px-16 px-6 py-4'>
                <Link href="/" className='flex justify-center items-center'>
                    <Image src="/logo.svg" alt='Car Hub Logo' width={118} height={18} className='object-contain' />
                </Link>

                <button className='text-primary-blue rounded-full bg-gray-100 min-w-[130px] min-h-[50px] hover:bg-blue-200' onClick={() => setShowModal(true)}>Sign In</button>

                <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                    <div className="py-6 px-6 lg:px-8 text-left">
                        <h3 className='mb-4 text-xl font-medium text-gray-700'>Sign in to the car store</h3>
                        <form action="#" className="space-y-6">
                            <div>
                                <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-700'>Your email address</label>
                                <input type='email' name="email" id="email" className='bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-3' placeholder="youremail@domain.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-700'>Your password</label>
                                <input type='password' name="password" id="password" className='bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-3' placeholder="ex. 123456789" required />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value={""} className='w-4 h-4 bg-gray-100 rounder border border-gray-200 focus:ring-3 focus:ring-blue-300' />
                                    </div>
                                    <label htmlFor='remember' className='ml-2 text-sm font-medium text-gray-700'>Remember me</label>
                                </div>
                                <a href="#" className="text-sm text-blue-700 hover:underline">Forgot your password?</a>
                            </div>
                            <button type='submit' className='w-full rounded-md h-10 text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 '>Log In</button>
                        </form>
                    </div>
                </Modal>
            </nav>
        </header>
    )
}

export default Navbar
