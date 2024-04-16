"use server"
import { redirect } from 'next/navigation'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function AddAttribute(postingId:number,attribute:string,value:string){
            try{
                await prisma.mateDetail.create({
                    data:{
                        PostingID:postingId,
                        SpecificAttribute:attribute,
                        Value:value
                    }
                })
                console.log("attribute added");
            }catch(e){
                throw e
            }
}

export async function DeleteAttribute(mateDetailId:number) {
    try{
        await prisma.mateDetail.delete({
            where:{
                MateDetailID:mateDetailId
            }
        })
    }catch(e){
        console.log(e);
    }
}