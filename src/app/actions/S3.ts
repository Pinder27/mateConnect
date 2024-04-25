"use server"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand,PutObjectCommand } from "@aws-sdk/client-s3";
import { PrismaClient } from '@prisma/client'





const prisma = new PrismaClient()

// ...

const client = new S3Client({
    region: "eu-north-1",
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID_AWS as string,
        secretAccessKey: process.env.SECRET_ACCESS_KEY_AWS as string,
    },
});




export async function GetObjectUrl(key: string) {
   
    const command = new GetObjectCommand({
        Bucket: "pindersbucket",
        Key: key,
    });
    return await getSignedUrl(client, command);
}

export async function GetImagesUrl(flatmateID:number|string){
    let imagesUrl = []
    try{
        const images = await prisma.images.findMany({
            where:{
                FlatMateID:Number(flatmateID)
            }
        })
        for (let i = 0; i < images.length; i++) {
            imagesUrl.push(await GetObjectUrl(images[i].Url));
        }
        return imagesUrl;
    }catch(e){
        console.log(e);
    }
}


export async function PutObjectUrl(fileName:string,flatmateID:number) {
    console.log("flatmateID",flatmateID);
  
   
    const command = new PutObjectCommand({
        Bucket: "pindersbucket",
        Key: `/uploads/flat-images/${fileName}`,
        ContentType: "image/jpeg",
    });
    
    try{
        const url =  await getSignedUrl(client,command);
        await prisma.images.create({
            data: {
                FlatMateID:Number(flatmateID),
                Url: `/uploads/flat-images/${fileName}`,
            }
        })
        
    return url;
       // return image;
    }catch(e){
        console.log(e);
        
    }
    

}

