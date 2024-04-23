"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";

import { redirect, useRouter } from "next/navigation";


export default function Page(){
    const router = useRouter()
    var user = false
    const session = useSession();
    if(session?.data?.user){
        user = true;
    }
    console.log("nextauth yrl",process.env.NEXTAUTH_URL);
    console.log("nextauth secrtet",process.env.NEXTAUTH_SECRET);
    console.log("urldb",process.env.DATABASE_URL);
    console.log("env",process.env);

    return (
        <div className="flex flex-row border-b-4 mb-3 items-center p-4">
            <Link href={"/"}>MateConnect</Link>
            {user && (
                <div className="ms-auto">
                    <button onClick={()=>router.push('/userDashboard')} className=" p-2 m-1 bg-blue-200 hover:bg-blue-300 active bg-blue-400">
                        userDashboard
                    </button>
                    <button className="m-1 p-2 bg-blue-200 hover:bg-blue-300 active bg-blue-400" onClick={() => signOut()}>
                        logout
                    </button>
                </div>
            )}
            {!user && (
                <button className=" ms-auto p-2 bg-blue-200 hover:bg-blue-300 active bg-blue-400" onClick={() => signIn()}>
                    login
                </button>
            )}
        </div>
    );
}