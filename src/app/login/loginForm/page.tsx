"use client"

import { LoginUser } from "@/app/actions/userActions"
import { signIn } from "next-auth/react";
import { FormEvent } from "react";


 
export default function Page(){

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            const formdata = new FormData(e.currentTarget);
            signIn("credentials",{
                email:formdata.get("email"),
                password:formdata.get("password"),
                redirect:false
            })
    }
    return(
        <div className="flex flex-col p-10">
        <form onSubmit={handleSubmit} className="flex flex-col w-1/3">
            <label id="email">Email</label>
            <input className="border" type="text" name="email" />
            <label id="password" >Password</label>
            <input className="border" type="password" name="password" />
            <button type="submit">submit</button>
        </form>
        </div>
    )
}