"use client";

import React from 'react'
import { ModalProps } from '@types'

const Modal = ({ isVisible, onClose, children }: ModalProps) => {
    if (!isVisible) return null

    const handleModalClose = (event: any) => {
        if (event.target.id === 'wrapper') onClose()
    }

    return (
        <div id='wrapper' className='flex justify-center items-center fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm' onClick={handleModalClose}>
            <div className='flex flex-col w-[600px]'>
                <button className="w-10 text-black text-xl place-self-end bg-white rounded-lg" onClick={() => onClose()}>X</button>
                <div className="bg-white p-2">{children}</div>
            </div>
        </div>
    )
}

export default Modal
