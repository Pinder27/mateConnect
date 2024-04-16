"use client"
import { CreateUser } from "@/app/actions/userActions" 

export default function Page(){
    return(
        <div className="flex p-10">
        <form action={CreateUser} className="flex flex-col w-1/3">
            <input className="border" type="text" name="name" />
            <input className="border" type="text" name="email" />
            <input className="border" type="password" name="password" />
            <button type="submit">submit</button>
        </form>
        </div>
    )
}
