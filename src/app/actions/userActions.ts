"use server"
import { redirect } from 'next/navigation'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export async function CreateUser(formData:FormData) {
    console.log("formData",formData)
     const user = {
        Name:formData.get("name") as string,
        Email:formData.get("email") as string,
        Password:formData.get("password") as string,
     }
    try{
        await prisma.user.create({
            data:user
        })
       
       
       
    }catch(e:any)
    {
        console.log("error12",e)
        if(e?.code == "P2002")  throw new Error("Email already exists");
        //return e?.message;
    }
   
}

export async function LoginUser(email:string,password:string) {
    
      
     
     try{
       const user = await prisma.user.findUnique({
            where: {
                Email:email,
            }
        })
        
        if(user?.Password == password)  return user;
        
        throw new Error("Invalid Credentials");
     }catch(e){
        console.log(e);
        throw(e)
     }
}


