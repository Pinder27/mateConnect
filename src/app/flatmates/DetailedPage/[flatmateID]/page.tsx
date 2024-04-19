import AppBar from "@/app/components/lib/appBar/page"
import { GetSpecificFlatMatePost } from "@/app/actions/FlatmateActions"


import { ViewUserProfile } from "@/app/actions/userProfileActions";
import ImageCarousel from "@/app/components/lib/flatmate/ImageCarousel/page";


export default async function Page({ params }: { params: { flatmateID: string } }) {
  const post = await GetSpecificFlatMatePost(Number(params.flatmateID));
  const profile = await ViewUserProfile(post?.UserID as number);

  
  
  
  

  return (
    <div>
      <AppBar/>
    <div className="flex flex-col items-center p-4">
      <div className="h-96 w-full flex justify-center">
        <ImageCarousel flatmateID={Number(params.flatmateID)} />  
        
       
       </div>
       <div className="grid grid-col-3 gap-4 border rounded mt-2 w-full p-4 ps-12">
        <div className="col-span-3 font-bold">Flat Details</div>
          <div className="col-span-3">{post?.Title}</div>
          <div className="col-span-3">{post?.Description}</div>
          <div>{`Location - ${post?.Location}`}</div>
          
          <div>{`Rent - ${post?.Rent}`}</div>
          <div>{`Parking - ${post?.Parking==true?"Availabe":"Not Availabe"}`}</div>
          <div>{`Sharing - ${post?.Sharing==true?"Availabe":"Not Availabe"}`}</div>
          <div>{`WithWashroom - ${post?.WithWashroom==true?"Availabe":"Not Availabe"}`}</div>
          <div>{`Furnished - ${post?.Furnished==true?"Availabe":"Not Availabe"}`}</div>
          <div>{`Gender - ${post?.Gender}`}</div>
          <div>{`Balcony - ${post?.Balcony==true?"Availabe":"Not Availabe"}`}</div>
       </div>
       <div className="border rounded w-full p-4">
        <div className="font-bold">Owner Details</div>
          <div>{`Name - ${profile?.Name}`}</div>
          <div>{`Email - ${profile?.Email}`}</div>
          <div>{`Phone - ${profile?.Phone}`}</div>
       </div>
      

    </div>
    </div>
  )
}