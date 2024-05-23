"use client"
import Link from 'next/link'

import { useEffect, useState } from 'react';
import { FlatMate } from '../../../../../../new-type';
import ImageCarousel from '../ImageCarousel/page';




export default function FlateMateCard({post}:{post:FlatMate}) {
    
      
    const [postedAgo, setPostedAgo] = useState<string>(""); 
    

    useEffect(() => {   
    function calculatePostedAgo() {
        const currentDate = new Date();
        const postTime = new Date(post?.DatePosted);
        const timeDifference = currentDate.getTime() - postTime.getTime();

        // Calculate the time difference in seconds, minutes, hours, and days
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        // Update the "posted ago" state based on the time difference
        if (days > 0) {
            setPostedAgo(days + " days ago");
        } else if (hours > 0) {
            setPostedAgo(hours + " hours ago");
        } else if (minutes > 0) {
            setPostedAgo(minutes + " minutes ago");
        } else {
            setPostedAgo(seconds + " seconds ago");
        }
    }
    calculatePostedAgo();
},[])
    return (


        <div  className="z-0 mb-2 w-full sm:flex p-3 bg-white border border-gray-200 rounded-lg shadow ">
            <div className='m-2 h-40 sm:h-40 sm:w-1/2'>
                 <ImageCarousel flatmateID={post?.ID} /> 
            </div>
            <Link href={`/flatmates/DetailedPage/${post?.ID}`} className='w-full mt-4 ms-4'>
                <div className='flex mb-4'>
                    <div className='me-2'>Posted by - </div>
                    <div className=" text-l font-bold tracking-tight text-gray-900">{post?.User?.Name}</div>
                </div>

                <p className="mb-3 font-normal text-gray-700 ">{post?.Description}</p>
                <div className='mb-2'>{`Location - ${post?.Location}`}</div>
                <div className='hidden sm:block'> 
                <div className='grid grid-cols-3 gap-2'>
                    
                    <div>{`Rent - ${post?.Rent}`}</div>
                    <div>{`Gender Pref - ${post?.Gender}`}</div>
                    <div>{`Type - ${post?.Type}`}</div>
                </div>
                </div>
                <div className='sm:hidden'>{`Rent - ${post?.Rent}`}</div>
                <div className='grid grid-cols-2 gap-2 sm:hidden'>
                <div>{`Gender Pref - ${post?.Gender}`}</div>
                    <div>{`Type - ${post?.Type}`}</div>
                </div>
                <div className='text-end w-full opacity-25 text-sm '>{`Posted ${postedAgo}`}</div>
            </Link>
        </div>

    )
}