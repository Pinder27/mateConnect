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
  const [showFilterBar,setShowFilterBar] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(false);
  
  useEffect(()=>{
    GetFlatMatePosts().then((res)=>{
      console.log(res);
      if(res){
      setList(res); // Provide a default empty array if res is undefined
      setFiltered(res); // Provide a default empty array if res is undefined
    }
    })
  },[])


  
    return(
      <div className="p-4" >
        <div className="" >
        <SearchBar  filtered={filtered} setFiltered={setFiltered} />
        </div>
        <button className="p-2 sm:hidden" onClick={()=>setShowFilterBar(!showFilterBar)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black"><path xmlns="http://www.w3.org/2000/svg" d="m15,24.011l-6-3.6v-6.221L1,5.19v-2.69C1,1.121,2.122,0,3.5,0h17c1.379,0,2.5,1.121,2.5,2.5v2.69l-8,9v9.82Zm-5-4.166l4,2.4v-8.436l8-9v-2.31c0-.827-.673-1.5-1.5-1.5H3.5c-.827,0-1.5.673-1.5,1.5v2.31l8,9v6.035Z"/></svg>
        </button>
       <div className=" flex relative ">
         
         <div className={`w-80 ${showFilterBar?'':'hidden'} sm:block`} style={{ position: "sticky", top: "80px", height: "calc(100vh - 8rem)", overflowY: "auto" }}>
       <FilterSideBar loading={loading} setLoading={setLoading} list={list} setList={setList} filtered={filtered} setFiltered={setFiltered} />
       </div>
       
       
        <div className={`flex flex-col ms-4 z-0 w-full sm:w-2/3 relative ${showFilterBar?'hidden':''}`} >
            {loading&&<div className="text-bold text-center mt-5">Loading...</div>}
            {!loading&&filtered.length==0&&<div className="text-bold text-center mt-5">No Results Found</div>}
            {!loading&&filtered.length>0&&filtered?.map((post)=><FlatMateCard key={post.ID} post={post}  />)}
        </div>
        
        </div>
        </div>
        
    )
}