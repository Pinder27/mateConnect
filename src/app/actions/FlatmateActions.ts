"use server"
import { redirect } from 'next/navigation'
import { PrismaClient } from '@prisma/client'

import { revalidatePath } from 'next/cache';


const prisma = new PrismaClient()

export async function  AddFLatMatePost(userId:string,formData:FormData) {
    console.log("formdata",formData);
    let success = false;
    const Post = {
        UserID:Number(userId),
        Title:formData.get("title") as string,
        Description:formData.get("description") as string,
        Location:formData.get("location") as string,
        Furnished:(formData.get("furnished") as string == 'on')as boolean,
        Parking:(formData.get("parking") as string == 'on')as boolean,
        Rent:parseInt(formData.get("rent")as string) as number,
        Balcony:(formData.get("balcony") as string == 'on')as boolean,
        Sharing:(formData.get("sharing") as string == 'on')as boolean,
        WithWashroom: (formData.get("withWashroom") as string == 'on')as boolean,
        Gender:formData.get("gender")as string,
        Type:formData.get("type") as string

    }
    try{
       var response =  await prisma.flatMate.create({
            data:Post
        })
       success = true
    }catch(e){
        return{
            success:false,
            error:e
        }
        console.log(e);
    }
    if(success)
    redirect(`/flatmates/ImageUploader/${response.ID}`)
}

export async function  UpdateFLatMatePost(userId:number,flatMateId:number,formData:FormData) {
    const Post = {
        UserID:userId as number,
        Title:formData.get("title") as string,
        Description:formData.get("description") as string,
        Location:formData.get("location") as string,
        Furnished:(formData.get("furnished") as string == 'on')as boolean,
        Parking:(formData.get("parking") as string == 'on')as boolean,
        Rent:parseInt(formData.get("rent")as string) as number,
        Balcony:(formData.get("balcony") as string == 'on')as boolean,
        Sharing:(formData.get("sharing") as string == 'on')as boolean,
        WithWashroom: (formData.get("withWashroom") as string == 'on')as boolean,
        Gender:formData.get("gender")as string

    }
    try{
        await prisma.flatMate.update({
            where:{
                ID:flatMateId,
                UserID:userId
            },
            data:Post
        })
    }catch(e){
        console.log(e);
    }
}

export async function  DeleteFLatMatePost(userId:number,flatMateId:number) {
    
    try{
        await prisma.images.deleteMany({
            where:{
                FlatMateID:flatMateId
            }
        })
        await prisma.flatMate.delete({
           where:{
            ID:flatMateId,
            UserID:userId
           }
        })
    }catch(e){
        console.log(e);
    }
    revalidatePath('/flatmates/UserPosts')
}

export async function GetUserFlatMatePosts(userID:string) {
    console.log("userid",userID);
    try{
       const posts =  await prisma.flatMate.findMany({
        where:{
         UserID:Number(userID)
        },
        include:{
              Images:true
        }
      } )
       return posts
    }catch(e){
        console.log(e);
    }
}

export async function GetFlatMatePosts() {
    try{
       const posts =  await prisma.flatMate.findMany({
        include:{
           Images:true,
              User:{select:{Name:true}}
        }}
       )
       
       return posts
    }catch(e){
        console.log(e);
    }
}

export async function GetSpecificFlatMatePost(flatMateID:number){
    try{
        const post = await prisma.flatMate.findUnique({
            where:{
                ID:Number(flatMateID),
            },
            include:{
                Images:true
            }
        })
        
        return post
    }catch(e){
        console.log(e);
    }
}
interface FilterOptions {
    [key: string]: any;
}

export async function GetFilteredFlatList(filters:FilterOptions){
      
      const val = Object.entries(filters).reduce((acc, [key, value]) => {
        if (value !== undefined) {
            acc[key] = value;
        }
        return acc;
    }, {} as any)
    
    try {
        const posts = await prisma.flatMate.findMany({
            where: val
        });
       
        return posts;
    }catch(e){
        console.log(e);
    }
}

