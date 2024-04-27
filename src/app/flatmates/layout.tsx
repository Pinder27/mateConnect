import { getServerSession } from "next-auth"
import AppBar from "../components/lib/appBar/page"
import { NEXT_AUTH } from "../lib/auth"
export default async function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }){
    const session = await getServerSession(NEXT_AUTH)
   return(
    <div>
       <div className="sticky top-0 z-40">
            <AppBar session={session}/>
            </div>
        {children}
    </div>
   )
}