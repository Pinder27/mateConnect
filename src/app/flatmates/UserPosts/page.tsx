import FlatMatePosts from "@/app/components/lib/userDashboard/userPosts/flatMatePosts";
import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { Suspense } from 'react'

export default async function UserPost(){
    const session = await getServerSession(NEXT_AUTH)
    return (
        <div>
            <FlatMatePosts session={session}/>
        </div>
    )
}