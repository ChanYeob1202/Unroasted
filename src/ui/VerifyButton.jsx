import React, { useState } from 'react'
import { doc } from 'firebase/firestore'
import { db } from '../lib/firebase/firebase';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

export default function VerifyButton({ user }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = async () => {
        setIsOpen(!isOpen);
        console.log("Clicked user:", user);
        //TODO: setDoc -> when click delete & verify using switch (Case)
        
        

        
    }
    
    return (
        <div className="relative">
            <button
                onClick={handleClick}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                <EllipsisVerticalIcon className="h-5 w-5 text-gray-500" />
            </button>
            
            {/* TODO: if click other button, set !isOpen */}
            {isOpen && (
              <div className="absolute bg-white p-4 font-serif text-xs z-50 border-b-gray-950 rounded-2xl">
                <button className="mb-2 hover:text-[1rem] transition-all">deactivate</button>
                <button className='mb-2 hover:text-[1rem] transition-all text-red-500'>delete</button>
              </div>
            )}
        </div>
    );
}
