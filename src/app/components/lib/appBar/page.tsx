"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";

import { redirect, useRouter } from "next/navigation";
import DropdownButton from "../dropdown btn/page";


export default function Page({session}:{session:any}){
    const router = useRouter()
    
   
    return (
        <div className="flex flex-row border-b-4 mb-3 items-center p-4 bg-white">
            <Link href={"/"}>MateConnect</Link>
            <div className="ms-auto flex me-10">
            {session&&<Link href={'/flatmates/AddPost'} className="rounded me-8 ms-auto p-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white">Add Post</Link>}
            {session && (
                
              
                    
                    <DropdownButton/>
                
            )}
            {!session && (
                <button className=" ms-auto p-2 bg-blue-500 hover:bg-blue-600 active bg-blue-400 rounded text-white" onClick={(e) => {e.preventDefault();signIn()}}>
                    login
                </button>
            )}
            </div>
        </div>
    );
}