"use client"
import UserDetailUpdateForm from "../components/lib/userDashboard/userDetailUpdateForm/page"
import UserPosts from "../components/lib/userDashboard/userPosts/page"
import AppBar from "../components/lib/appBar/page"
import { useState } from "react"
import SideBar from "./sideBar"
export default function Page(){
    const [selectedOption,setSelectedOption] = useState("profile")
    return(
        <>
        <AppBar/>
        <div className="flex flex-row">
           <SideBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
           <div className="h-screen bg-stone-100 w-full overflow-auto">
            
            {selectedOption=="profile"&&<UserDetailUpdateForm/>}
            {selectedOption=="userPosts"&&<UserPosts/>}
           
           
           </div>
        </div>
        </>
    )
}