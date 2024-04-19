"use client"
import { useState } from "react";

export default function SearchBar({filtered,setFiltered}:{filtered: any,setFiltered:any}){
    const [search,setSearch] = useState<string>("");
 const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault();
  setFiltered(filtered.filter((post:any)=>post.Location.toLowerCase().includes(search.toLowerCase())))
 }
    return(
        <div className="w-full flex justify-center m-2">
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search" className="border rounded w-1/2 " />
            <button onClick={handleClick} className="p-2 px-2 bg-blue-200 rounded ms-3">search</button>
        </div>
    )
}   