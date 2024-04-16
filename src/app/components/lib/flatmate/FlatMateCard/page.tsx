"use client"
import Link from 'next/link'

import { useEffect, useState } from 'react';
import { Images } from '@/app/type';
import { GetObjectUrl } from '@/app/actions/S3';

export default function Page({ userID, images, id, title = "required flatmate", description = "desc", location = "loc", date, rent = 10000, furnished, parking, sharing, withWashroom, gender }: { title: string, description: string, location: string, date: Date, rent: number, parking: boolean, sharing: boolean, withWashroom: boolean, id: number, furnished: boolean, gender: string, images: Images[], userID: number }) {
    const [imageUrl, setImageUrl] = useState<string>("/Image1.jpg");
       console.log(imageUrl);
    useEffect(() => {  
        if(images?.length>0)
        GetObjectUrl(images[0].Url).then((res) => {
            setImageUrl(res as string)
        })
     },[])
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


        <Link href={`/flatmates/DetailedPage/${id}`} className="w-full flex flex-row p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='m-2 h-32'>
                <img src={imageUrl} className="mx-auto block object-cover w-auto h-full" />
            </div>
            <div className='w-full'>
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </div>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <div className='grid grid-cols-3'>
                    <div>{`Location - ${location}`}</div>
                    <div>{`Rent - ${rent}`}</div>
                    <div>{`Gender - ${gender}`}</div>
                </div>
                <div className='text-end w-full opacity-25 text-sm '>{`Posted ${postedAgo}`}</div>
            </div>
        </Link>

    )
}