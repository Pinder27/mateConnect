"use client"
import { CreateUser } from "@/app/actions/userActions"
import Link from "next/link"

export default function SignupForm() {
    return (
        
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            
            <Link className="m-4 font-bold text-xl text-purple-900 italic" href={"/"}>FlatMates</Link>
           
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <form action={CreateUser} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                            <input 
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="name"
                                placeholder="Full Name" />
        
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
                            <input 
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password"
                                placeholder="Confirm Password" />
        
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                            >Create Account
                            </button>
        
                        </form>
        
                        <div className="text-grey-dark mt-6">
                            Already have an account? 
                            <Link className="ms-2 no-underline border-b border-blue text-blue-500" href="/login">
                                Log in
                            </Link>.
                        </div>
                    </div>
                </div>
    )
}
