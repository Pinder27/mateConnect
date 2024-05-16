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
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search for Location" className="border rounded w-1/2 px-2 focus:outline-none " />
            <button onClick={handleClick} className="p-2 px-2 ms-3">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
</svg>
            </button>
        </div>
    )
}   