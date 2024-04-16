"use server"
import { redirect } from 'next/navigation'
import { PrismaClient } from '@prisma/client'
import Facebook from 'next-auth/providers/facebook';

const prisma = new PrismaClient()




export async function CreateUserProfile(userId:number,formData:FormData){
    const profile = {
        
        
        Phone: formData.get("phone") as string, // Phone defaults to empty string if not provided
        
        BIO: formData.get("bio") as string, // BIO defaults to empty string if not provided
        dOB: formData.get("dob") as string, // dOB defaults to empty string if not provided
        ProfilePic: formData.get("profilePic") as string, // ProfilePic defaults to empty string if not provided
        Gender: formData.get("gender") as string, // Gender defaults to empty string if not provided
        FacebookHandle: formData.get("facebookHandle") as string, // FacebookHandle defaults to empty string if not provided
        TwitterHandle: formData.get("twitterHandle") as string, // TwitterHandle defaults to empty string if not provided
        InstagramHandle: formData.get("instagramHandle") as string, // InstagramHandle defaults to empty string if not provided
        LinkedInHandle: formData.get("linkedInHandle") as string, // LinkedInHandle defaults to empty string if not provided
    };

    try{
        await prisma.profile.update({
            where:{
                UserID:userId
            },
            data:profile
        })
        console.log("success updation");
    }catch(e){
        console.log(e)
    }
}

export async function GetUserProfile(userID:number) {
    try{
        const profile = prisma.profile.findUnique({
            where:{
                UserID:userID
            }
        })
        return profile
    }catch(e){
        console.log(e);
    }
}

export async function ViewUserProfile(userID:number) {
    try{
        const profile = await prisma.user.findUnique({
            where:{
                ID:userID
            },
            include:{
                Profile:true
            }
        })
        const EdittedProfile = {
            Name:profile?.Name,
            Email:profile?.Email,
            Phone:profile?.Profile?.Phone,
            BIO:profile?.Profile?.BIO,
            dOB:profile?.Profile?.dOB,
            ProfilePic:profile?.Profile?.ProfilePic,
            FacebookHandle:profile?.Profile?.FacebookHandle,
            TwitterHandle:profile?.Profile?.TwitterHandle,
            InstagramHandle:profile?.Profile?.InstagramHandle,
            LinkedInHandle:profile?.Profile?.LinkedInHandle,
            ProfilePhoto:profile?.Profile?.ProfilePic,
            Gender:profile?.Profile?.Gender,
        }
        
        return EdittedProfile;
    }catch(e){
        console.log(e);
    }
}
