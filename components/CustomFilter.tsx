"use client";

import Image from 'next/image'
import { CustomFilterProps } from '@types'
import React, { useState, Fragment } from 'react'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import { updateSearchParams } from '@utils';

const CustomFilter = ({ title, options }: CustomFilterProps) => {
    const router = useRouter();

    const [selected, setSelected] = useState(options[0])
    /* We pass the event and destructure the title and value of the params */
    const handleUpdateParams = (e: { title: string, value: string }) => {
        const newPathName = updateSearchParams(title, e.value.toLowerCase());

        // Route to the specified URL with the query params
        router.push(newPathName, { scroll: false });
    }

    return (
        <div className='w-fit'>
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e)
                    handleUpdateParams(e)
                }}
            >
                <div className="relative w-fit z-10">
                    <Listbox.Button className="custom-filter__btn">
                        <span className="block truncate">
                            {selected.title}
                        </span>
                        <Image src="/chevron-up-down.svg" alt="chevron up and down" width={20} height={20} className='ml-4 object-contain' />
                    </Listbox.Button>

                    <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Listbox.Options className="custom-filter__options">
                            {options.map((option) => (
                                /* Insert a callback in order to destructure && access the active state value */
                                <Listbox.Option
                                    key={option.title}
                                    value={option}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 px-4 ${active
                                            ? 'bg-primary-blue text-white'
                                            : 'text-gray-900'
                                        }`}>
                                    {({ selected }) => (
                                        <span className={`block truncate 
                                        ${selected
                                                ? 'font-medium'
                                                : 'font-normal'}`}>
                                            {option.title}
                                        </span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div >
    )
}

export default CustomFilter
