"use client"

import { signIn } from "next-auth/react"
import Link from "next/link";

import {useRouter } from "next/navigation";
import DropdownButton from "../dropdown btn/page";


export default function Page({session}:{session:any}){
    const router = useRouter()
    
   
    return (
        <div className="flex flex-row border-b-4 mb-3 items-center p-4 bg-white">
            <Link className="font-bold text-xl text-purple-900 italic" href={"/"}>FlatMates</Link>
            <div className="ms-auto flex me-10">
            {session&&<Link href={'/flatmates/AddPost'} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 opacity-75 rounded me-8 ms-auto p-2 bg-purple-900 hover:bg-purple-950 active:bg-purple-800 text-white">Add Post</Link>}
            {session && (    
                    <DropdownButton/>
            )}
            {!session && (
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  ms-auto p-2 px-4 bg-purple-800 hover:bg-purple-900 active bg-blue-400 rounded text-white" onClick={(e) => {e.preventDefault();signIn()}}>
                    login
                </button>
            )}
            </div>
        </div>
    );
}