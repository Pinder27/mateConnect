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
        const Res = res as FlatMate[]
        setList(Res)
        setFiltered(Res)
       
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
            {filtered?.map((post)=><FlatMateCard key={post.ID} title={post.Title} description={post.Description} location={post.Location} date={post.DatePosted} rent={post.Rent} parking={post.Parking} sharing={post.Sharing} withWashroom={post.WithWashroom} id={post.ID} furnished={post.Furnished} gender={post.Gender} images={post.Images} userID={post.UserID} type={post.Type} />)}
        </div>
        
        </div>
        </div>
        
    )
}