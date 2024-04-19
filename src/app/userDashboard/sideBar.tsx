"use client"

export default function SideBar({selectedOption,setSelectedOption}:{selectedOption:string,setSelectedOption:any}){
    return(
        <div className="flex flex-col bg-blue-500 w-1/4 h-screen items-center">
            <div>username and photo</div>
            <button onClick={()=>setSelectedOption("profile")} className="border w-2/3 rounded hover:bg-blue-800  text-white m-2 py-1">profile</button>
            <button onClick={()=>setSelectedOption("userPosts")} className="border w-2/3 rounded hover:bg-blue-800 text-white m-2 py-1">your Posts</button>
            <button onClick={()=>setSelectedOption("saved Posts")} className="border w-2/3 hover:bg-blue-800 text-white rounded m-2 py-1">saved posts</button>
            
        </div>
    )
}