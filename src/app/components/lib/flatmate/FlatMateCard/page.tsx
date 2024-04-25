"use client"
import Link from 'next/link'

import { useEffect, useState } from 'react';
import { Images } from '../../../../../../new-type';
import ImageCarousel from '../ImageCarousel/page';




export default function Page({type, userID, images, id, title = "required flatmate", description = "desc", location = "loc", date, rent = 10000, furnished, parking, sharing, withWashroom, gender }: { title: string, description: string, location: string, date: Date, rent: number, parking: boolean, sharing: boolean, withWashroom: boolean, id: number, furnished: boolean, gender: string, images: Images[], userID: number,type:string }) {
    
      
    const [postedAgo, setPostedAgo] = useState<string>(""); 
    

    useEffect(() => {   
    function calculatePostedAgo() {
        const currentDate = new Date();
        const postTime = new Date(date);
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


        <div  className="z-0 mb-2 w-full flex flex-row p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='m-2 h-40 w-1/2'>
                 <ImageCarousel flatmateID={id} /> 
            </div>
            <Link href={`/flatmates/DetailedPage/${id}`} className='w-full mt-4 ms-4'>
                <div>
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </div>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <div className='mb-2'>{`Location - ${location}`}</div>
                <div className='grid grid-cols-3'>
                    
                    <div>{`Rent - ${rent}`}</div>
                    <div>{`Gender - ${gender}`}</div>
                    <div>{`Type - ${type}`}</div>
                </div>
                <div className='text-end w-full opacity-25 text-sm '>{`Posted ${postedAgo}`}</div>
            </Link>
        </div>

    )
}