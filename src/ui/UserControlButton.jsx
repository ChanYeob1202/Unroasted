import React, { useState, useRef, useEffect } from 'react'
import { doc, updateDoc, getDocs, collection, query, where } from 'firebase/firestore'
import { db} from '../lib/firebase/firebase';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import ReactDOM from 'react-dom';

function PortalDropdown({ children }) {
  return ReactDOM.createPortal(children, document.body);
}

export default function UserControlButton({ userEmail, verified }) {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);

    const handleButtonClick = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDropdownPos({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX
            });
        }
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggleVerify = async () => {
        console.log(userEmail)
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", userEmail));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.error("No user found with email: ", userEmail);
            return;
        }
        const uid = querySnapshot.docs[0].id;
        const userRef = doc(db, "users", uid);

        await updateDoc(userRef, {
            verified: !verified
        });
    };


    return (
        <div className="relative">
            <button
                ref={buttonRef}
                onClick={handleButtonClick}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
                <EllipsisVerticalIcon className=" h-5 w-5 text-gray-500 " />
            </button>
            
            {isOpen && (
                <PortalDropdown>
                    <div
                        ref={dropdownRef}
                        style={{
                            position: 'absolute',
                            top: dropdownPos.top,
                            left: dropdownPos.left,
                            zIndex: 1000,
                        }}
                        className="w-36 flex flex-col bg-white border border-gray-200 rounded-xl shadow-xl py-2"
                    >
                        <button
                            onClick={handleToggleVerify}
                            className={`px-4 py-2 text-left text-sm font-medium rounded hover:bg-gray-100 transition-colors ${
                                verified ? "text-red-500" : "text-gray-700"
                            }`}
                        >
                            {verified ? "Unverify" : "Verify"}
                        </button>
                    </div>
                </PortalDropdown>
            )}
        </div>
    );
}