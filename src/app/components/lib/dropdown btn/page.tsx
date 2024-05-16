"use client"

import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

const DropdownButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    const session = useSession();
    
    return (
        <div className='relative'>
            <button className='flex' onClick={toggleDropdown}>{session?.data?.user?.name}
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
            </button>
            {isOpen && (
                <div className='absolute -left-12 z-10 bg-purple-900 divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700'>
                    <ul className="py-2 px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li >
        <a href="/flatmates/UserProfile" className="block text-white px-4 py-2 hover:bg-purple-600 rounded  dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
      </li>
      
      <li>
        <a href="/flatmates/UserPosts" className="block text-white px-4 py-2 hover:bg-purple-600 rounded dark:hover:bg-gray-600 dark:hover:text-white">Your Posts</a>
      </li>
     
      <li>
        <a href="#" onClick={() => signOut()} className="block text-white px-4 py-2 hover:bg-purple-600 rounded dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;