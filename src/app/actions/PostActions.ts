"use server"
import { redirect } from 'next/navigation'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export async function CreatePost(userID:number,formData:FormData) {
    const newPost = {
        UserID :userID as number ,
        Title:formData.get("title") as string,
         Description:formData.get("description") as string,
         Location :formData.get("location") as string,
         CategoryName:formData.get("categoryName") as string
    }
    try{
        await prisma.matePosting.create({
            data:newPost
        })
        console.log("success");
    }catch(e){
        console.log(e)
        throw e
    }
}

export async function UpdatePost(userID:number,PostingID:number,formData:FormData) {
    const newPost = {
        PostingID:PostingID,
        UserID :userID as number ,
        Title:formData.get("title") as string,
         Description:formData.get("description") as string,
         Location :formData.get("location") as string,
         DatePosted:formData.get("date") as string,
         CategoryName:formData.get("categoryName") as string
    }
    try{
        await prisma.matePosting.update({
            where:{
                PostingID:newPost.PostingID
            },
            data:newPost
        })
        console.log("success");
    }catch(e){
        console.log(e)
        throw e
    }
}

export async function DeletePost(userID:number,PostingID:number){
      
    try{
        await prisma.matePosting.delete({
            where:{
                UserID:userID,
                PostingID:PostingID
            }
        })
        console.log("post deleted success");
    }catch(e){
        console.log(e);
    }
}

export async function userSpecificPosts(userId:number) {
    try{
        const posts = await prisma.matePosting.findMany({
            where:{
                UserID:userId
            }
        })
        return posts
    }catch(e){
        console.log(e);
    }
}

export async function categorySpecificPosts(categoryName:string) {
    try{
       
        const posts = await prisma.matePosting.findMany({
            where:{
                CategoryName: categoryName
            }
        })
        return posts
    }catch(e){
        console.log(e);
    }
}

export async function GetAllPosts() {
    try{
        const posts = await prisma.matePosting.findMany()
        return posts
    }catch(e){
        console.log(e);
    }
}