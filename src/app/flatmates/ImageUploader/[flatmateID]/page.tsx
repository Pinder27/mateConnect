"use client"

import { PutObjectUrl } from "@/app/actions/S3";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function Page({ params }: { params: { flatmateID: number } }){
  const router = useRouter()  
    const [files, setFiles] = useState<FileList | null>(null);
    if(files){
      for (let i = 0; i < files?.length; i++) {
        console.log(files?.item(i))
    }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (files) {
        // Create an array to hold all the promises
        const promises = [];
      
        for (let i = 0; i < files.length; i++) {
          // Push each promise to the array without waiting for them to resolve
          promises.push(
            new Promise<void>((resolve, reject) => {
              PutObjectUrl(`image-${Date.now()}`, params.flatmateID)
                .then((url) => {
                  fetch(url as string, {
                    method: "PUT",
                    body: files[i],
                    headers: {
                      "Content-Type": "image/jpeg"
                    }
                  }).then((res) => {
                    // Check if the request was successful
                    if (res.ok) {
                      console.log("Uploaded:", url);
                      resolve(); // Resolve the promise if successful
                    } else {
                      console.error("Upload failed for:", url);
                      reject(new Error("Upload failed")); // Reject the promise if failed
                    }
                  });
                })
                .catch((e) => {
                  console.error("Error:", e);
                  reject(e); // Reject the promise if there's an error
                });
            })
          );
        }
      
        // Wait for all promises to resolve or reject
        Promise.all(promises)
          .then(() => {
            console.log("All uploads completed successfully");
            router.push(`/`);
          })
          .catch((error) => {
            console.error("One or more uploads failed:", error);
          });
      }
      
  }

    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Upload images
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            onChange={(e) => setFiles(e.target.files)}
            accept="image/*"
            multiple
            name="image"
            type="file"
            placeholder="Location"
          
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">submit</button>
            </form>
        </div>
    )
}
