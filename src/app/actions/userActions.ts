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
       console.log("success")
       
    }catch(e){
        console.log("error12",e)
        throw e;
    }
    redirect('/')
}

export async function LoginUser(email:string,password:string) {
    
      
     
     try{
       const user = await prisma.user.findUnique({
            where: {
                Email:email,
            }
        })
       
        return user;
     }catch(e){
        console.log(e);
        throw(e)
     }
     redirect('/')
}


