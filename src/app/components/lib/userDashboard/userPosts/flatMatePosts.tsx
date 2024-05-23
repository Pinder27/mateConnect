"use client"

import { DeleteFLatMatePost, GetUserFlatMatePosts } from "@/app/actions/FlatmateActions"

import { useEffect, useState } from "react"
import { FlatMate } from "../../../../../../new-type"
import ImageCarousel from "../../flatmate/ImageCarousel/page"
import Link from "next/link"

export default function FlatMatePosts({session}:{session:any}){
    const [posts,setPosts] = useState<FlatMate[]>([])
    

    useEffect(()=>{
        GetUserFlatMatePosts(session?.user?.id).then((res)=>{
            if(res)
                console.log("res" ,res as FlatMate[]);
             setPosts(res as FlatMate[])
        })
    },[])

    
  if(posts?.length==0) return (<div className="text-center">No Posts Found</div>  )

    return(
        <div className="px-6">
            <div className="text-xl p-4">Your Posts</div>
        <div className="p-4">
            {
                posts?.map((post,index)=>
                    <PostCard post={post} key={index}/>
                )
            }
        </div>
        </div>
    )
}

const PostCard = ({ post }: { post: FlatMate }) => {
    return (
        <div  className="z-0 mb-2 w-full flex flex-row p-3 bg-white border border-gray-200 rounded-lg shadow">
            <div className='m-2 h-40 w-1/2'>
                 <ImageCarousel flatmateID={post.ID} /> 
            </div>
            <div  className='w-full mt-4 ms-4'>
                <div className="grid grid-cols-2">
                <div className="col-span-2">
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 ">{post.Title}</h5>
                </div>
                
                <p className="mb-3 font-normal text-gray-700 col-span-2">{post.Description}</p>
                <div className='mb-2'>{`Location - ${post.Location}`}</div>
                <div className="justify-self-end">
                <Link href={`/flatmates/DetailedPage/${post.ID}`} className="bg-blue-500 hover:bg-blue-600 rounded p-2  px-9 text-white">view</Link>
                </div>
                </div>
                <div className='grid grid-cols-4'>
                    
                    <div>{`Rent - ${post.Rent}`}</div>
                    <div>{`Gender - ${post.Gender}`}</div>
                    <div>{`Type - ${post.Type}`}</div>
                    <button className="w-44 ms-auto bg-red-400 hover:bg-red-500 rounded p-2 text-white" onClick={(e)=>{ 
                        console.log("object");
                        DeleteFLatMatePost(post.UserID,post.ID)
                        }}>Delete</button>
                </div>
                {/* <div className='text-end w-full opacity-25 text-sm '>{`Posted ${postedAgo}`}</div> */}
                
            </div>
        </div>
    );
};
