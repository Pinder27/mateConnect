

import { AddFLatMatePost } from "@/app/actions/FlatmateActions";
import { NEXT_AUTH } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";




export default async function CreateForm() {


  const session  = await getServerSession(NEXT_AUTH);

  if(!session){
   redirect("/login")
  }

  const userId = session?.user?.id;

  const CreatePostWithUserId = AddFLatMatePost.bind(null, userId)
 

  return (
    <div className="max-w-md mx-auto mt-8">
      <form action={CreatePostWithUserId} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
        <div className='mb-4'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <select id="type" name='type' className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 ">

            <option value={'Pg'}>Pg</option>
            <option value={'Flat'}>Flat</option>
            <option value={'Independent House'}>Independent House</option>

          </select>

        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
            Gender Preffered
          </label>
          <select id="gender" name='gender' className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 ">

            <option value={'female'}>Female</option>
            <option value={'male'}>Male</option>
            <option value={'any'}>Any</option>

          </select>

        </div>

        <div className="mb-4">
          <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
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
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
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
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
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
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
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
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
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