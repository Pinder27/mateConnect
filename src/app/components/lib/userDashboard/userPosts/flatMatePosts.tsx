"use client"

import { GetUserFlatMatePosts } from "@/app/actions/FlatmateActions"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { FlatMate } from "@/app/type"

export default function FlatMatePosts(){
    const [posts,setPosts] = useState<FlatMate[]>()
    const session:any = useSession()
    useEffect(()=>{
        GetUserFlatMatePosts(session?.data?.user?.id).then((res)=>{
             setPosts(res)
        })
    },[])
    
    {posts?.map((post) => (
        <PostCard post={post} />
    ))}
    return(
        <div>
            {
                posts?.map((post)=>
                    <PostCard post={post}/>
                )
            }
        </div>
    )
}

const PostCard = ({ post }: { post: FlatMate }) => {
    return (
        <div key={post.ID} className="bg-white border m-2 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{post.Title}</h2>
            <p className="text-gray-600 mb-2">{post.Description}</p>
            <p className="text-gray-600">{post.Location}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Edit</button>
        </div>
    );
};
