"use client"

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";


 
export default function Page(){
    const router = useRouter()

    const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            const formdata = new FormData(e.currentTarget);
          const res = await  signIn("credentials",{
                email:formdata.get("email"),
                password:formdata.get("password"),
                redirect:false
            })
            if(res?.status == 200) router.push('/')
            
    }
    return(
        <div className="bg-grey-lighter min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <form onSubmit={handleSubmit} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Login</h1>
                            
        
                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />
        
                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />
                        
        
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                            >Login
                            </button>
        
                        </form>
        
                        <div className="text-grey-dark mt-6">
                            New User? 
                            <Link className="ms-2 no-underline border-b border-blue text-blue-500" href="/signup">
                                Sign up
                            </Link>.
                        </div>
                    </div>
                </div>
    )
}