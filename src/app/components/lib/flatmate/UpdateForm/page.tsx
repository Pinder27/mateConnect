"use client"

import { UpdateFLatMatePost } from "@/app/actions/FlatmateActions";
import { useSession } from "next-auth/react";


export default function Page({flatmateId}:{flatmateId:number}){
  const session:any = useSession();
    const userId = session?.data?.user?.id;
    const UpdatePostWithUserId = UpdateFLatMatePost.bind(null,userId,flatmateId)
    return(
        <div className="max-w-md mx-auto mt-8">
      <form action={UpdatePostWithUserId}  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            name="title"
            type="text"
            placeholder="Title"
           
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Description"
            
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            name="location"
            type="text"
            placeholder="Location"
          
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Rent
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rent"
            name="rent"
            type="text"
            placeholder="Location"
          
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Upload images
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            name="image"
            type="file"
            placeholder="Location"
          
          />
        </div>
        <div className="mb-4">
        <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="balcony"
            name="balcony"
            type="checkbox"
            placeholder="Location"
          
          />
          <label className="ms-2  text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Balcony
          </label>
          
        </div>
        <div className="mb-4">
        <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="sharing"
            name="sharing"
            type="checkbox"
            placeholder="Location"
          
          />
          <label className=" ms-2 text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Sharing
          </label>
          
        </div>
        <div className="mb-4">
         
          <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="furnished"
            name="furnished"
            type="checkbox"
            placeholder="Location"
          
          />
           <label className="ms-2 text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Furnished
          </label>
        </div>
        <div className="mb-4">
        <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="parking"
            name="parking"
            type="checkbox"
            placeholder="Location"
          />
          <label className="ms-2 text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Parking
          </label>
          
        </div>
        <div className="mb-4">
        <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="withWashroom"
            name="withWashroom"
            type="checkbox"
            placeholder="Location"
          
          />
          <label className="ms-2  text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            With Washroom
          </label>
          
        </div>
        <div className="flex items-center justify-between mt-4">
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