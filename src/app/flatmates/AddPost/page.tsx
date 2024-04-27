
import { GetUserProfile } from "@/app/actions/userProfileActions"
import CreateForm from "@/app/components/lib/flatmate/CreateForm/page"
import { NEXT_AUTH } from "@/app/lib/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async  function AddPost(){

   const session = await getServerSession(NEXT_AUTH)
   const profile = await GetUserProfile(session?.user?.id)
   if(!profile) redirect("/flatmates/UserProfile") 
    return(
        <div>
            <CreateForm/>
        </div>
    )
}

