import UserProfileForm from "@/app/components/lib/userDashboard/userDetailUpdateForm/page";
import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function UserProfile(){
    const session = await getServerSession(NEXT_AUTH)
    console.log("sess in user profile",session);
    if(!session) redirect("/")
    return (
        <div>
            <div className="p-4 text-xl">Your Profile</div>
            <UserProfileForm session={session}/>
        </div>
    )   
}