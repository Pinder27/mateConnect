import FlatMatePosts from "@/app/components/lib/userDashboard/userPosts/flatMatePosts";
import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth";


export default async function UserPost(){
    const session = await getServerSession(NEXT_AUTH)
    console.log("sess in userPost",session);
    return (
        <div>
            <FlatMatePosts session={session}/>
        </div>
    )
}