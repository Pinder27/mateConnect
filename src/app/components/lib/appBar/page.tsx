"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";

import { redirect, useRouter } from "next/navigation";
import DropdownButton from "../dropdown btn/page";


export default function Page(){
    const router = useRouter()
    var user = false
    const session = useSession();
    if(session?.data?.user){
        user = true;
    }
   
    return (
        <div className="flex flex-row border-b-4 mb-3 items-center p-4 bg-white">
            <Link href={"/"}>MateConnect</Link>
            <div className="ms-auto flex me-10">
            <Link href={'/flatmates/AddPost'} className="rounded me-8 ms-auto p-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white">Add Post</Link>
            {user && (
                
              
                    
                    <DropdownButton/>
                
            )}
            {!user && (
                <button className=" ms-auto p-2 bg-blue-200 hover:bg-blue-300 active bg-blue-400" onClick={() => signIn()}>
                    login
                </button>
            )}
            </div>
        </div>
    );
}