"use client"


import FlatMateCard from "../FlatMateCard/page"
import { GetFlatMatePosts } from "@/app/actions/FlatmateActions";
import { useEffect, useState } from "react";
import { FlatMate } from "../../../../../../new-type";
import SearchBar from "../../searchBar/page";
import FilterSideBar from "../FilterSideBar/page";





 
export default function Page(){
  const [list,setList] = useState<FlatMate[]>([]);
  const [filtered,setFiltered] = useState<FlatMate[]>([]); 
  
  useEffect(()=>{
    GetFlatMatePosts().then((res)=>{
      console.log(res);
      const Res = res || []; // Provide a default empty array if res is undefined
      setList(Res);
      setFiltered(Res);
     
    })
  },[])


  
    return(
      <div className="p-4" >
        <div className="" >
        <SearchBar  filtered={filtered} setFiltered={setFiltered} />
        </div>
       <div className=" flex relative ">
        
         <div className="" style={{ position: "sticky", top: "80px", height: "calc(100vh - 8rem)", overflowY: "auto" }}>
       <FilterSideBar list={list} setList={setList} filtered={filtered} setFiltered={setFiltered} />
       </div>
       
       
        <div className="flex flex-col ms-4 z-0 w-2/3 relative" >
            {filtered?.map((post)=><FlatMateCard key={post.ID} post={post}  />)}
        </div>
        
        </div>
        </div>
        
    )
}