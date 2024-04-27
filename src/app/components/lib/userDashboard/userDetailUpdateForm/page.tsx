"use client"

import { CreateUserProfile, GetUserProfile } from "@/app/actions/userProfileActions";
import { useEffect, useState } from "react";
import { Profile } from "../../../../../../new-type";



export default function UserProfileForm({session}:{session:any}){
  const [profile,setProfile] = useState<Profile|null|undefined>()
    const userId = session?.user?.id;
    const updateUserWithId = CreateUserProfile.bind(null, userId)
    
    useEffect(()=>{
        GetUserProfile(userId).then((res)=>{
          console.log("res",res);
          setProfile(res)
        })
    },[])
    return(
        <div className="max-w-md mx-auto mt-8">
        <form action={updateUserWithId} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone" >
              Phone*
            </label>
            <input
              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone"
              defaultValue={profile?.Phone?profile.Phone:""}
            />
          </div>
          
        
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
              dob*
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              name="dob"
              type="date"
              placeholder="Phone"
              defaultValue={`${profile?.dOB}`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePic">
              Profile
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="profilePic"
              name="profilePic"
              type="text"
              placeholder="profilePic"
              defaultValue={""}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender*
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
              type="text"
              placeholder="Gender"
              defaultValue={""}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="facebookHandle">
              FacebookHandle
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="facebookHandle"
              name="facebookHandle"
              type="text"
              placeholder="FacebookHandle"
              defaultValue={""}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="twitterHandle">
              TwitterHandle
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="twitterHandle"
              name="twitterHandle"
              type="text"
              placeholder="TwitterHandle"
              defaultValue={""}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instagramHandle">
              InstagramHandle
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="instagramHandle"
              name="instagramHandle"
              type="text"
              placeholder="InstagramHandle"
              defaultValue={""}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    )
}