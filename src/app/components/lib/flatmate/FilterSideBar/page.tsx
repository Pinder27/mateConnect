"use client"
import { GetFilteredFlatList } from "@/app/actions/FlatmateActions";
import { FlatMate } from "../../../../../../new-type";
import { useEffect, useState } from "react";

export default function FilterSideBar({loading,setLoading, filtered, setFiltered,list,setList}: {loading: boolean,setLoading:React.Dispatch<React.SetStateAction<boolean>>, filtered: FlatMate[]|undefined, setFiltered: React.Dispatch<React.SetStateAction<FlatMate[]>>,list:FlatMate[],setList:React.Dispatch<React.SetStateAction<FlatMate[]>> }) {
    const [gender, setGender] = useState("any");
    const [rent, setRent] = useState('100000');
    const [sharing, setSharing] = useState<boolean|undefined>(undefined);
    const [parking, setParking] = useState<boolean|undefined>(undefined);
    const [furnished, setFurnished] = useState<boolean|undefined>(undefined);
    const [withWashroom, setWithWashroom] = useState<boolean|undefined>(undefined);
    const [balcony, setBalcony] = useState<boolean|undefined>(undefined);
    const [type,setType] = useState("any");

  
    useEffect(() => {
        setLoading(true);
        const filters = {
            Gender:gender==='any'?undefined:gender,
            Sharing:sharing==true?true:undefined,
            Parking:parking==true?true:undefined,
            Furnished:furnished==true?true:undefined,
            WithWashroom:withWashroom==true?true:undefined,
            Balcony:balcony==true?true:undefined,
            Type:type==='any'?undefined:type
        }
          GetFilteredFlatList(filters).then((res)=>{
            const filteredList = res as FlatMate[]
            console.log("fltyered",filteredList);
            const filteredListwithrent = filteredList.filter((post:FlatMate)=>post.Rent <= Number(rent))
            setList(filteredList)
            setFiltered(filteredListwithrent)
            setLoading(false)
          })
    }
    ,[gender,sharing,parking,furnished,withWashroom,balcony,type])


    
    useEffect(()=>{
        const filteredList = list.filter((post:FlatMate)=>post.Rent <= Number(rent))
          setFiltered(filteredList)
    },[rent])
    return (
        <div className="w-full p-4" style={{backgroundColor:'rgba(88, 28, 135, 0.19)'}}>
            <div className="bg-white border p-2">
                <div>Gender</div>
                <div>
                    <input id="gender-radio-male" type="checkbox" name="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.name)} />
                    <label className="ms-2" htmlFor="gender-radio-male" >Male</label>
                </div>
                <div>
                    <input id="gender-radio-female" type="checkbox" name="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.name)} />
                    <label className="ms-2" htmlFor="gender-radio-female" >Female</label>
                </div>
                <div>
                    <input id="gender-radio-any" type="checkbox" name="any" checked={gender === 'any'} onChange={(e) => setGender(e.target.name)} />
                    <label className="ms-2" htmlFor="gender-radio-any" >Any</label>
                </div>
            </div>
            <div className="bg-white border p-2 mt-2">
                <div>Type</div>
                <div>
                    <input id="gender-radio-pg" type="checkbox" name="Pg" checked={type === 'Pg'} onChange={(e) => setType(e.target.name)} />
                    <label className="ms-2" htmlFor="gender-radio-pg" >Pg</label>
                </div>
                <div>
                    <input id="gender-radio-flat" type="checkbox" name="Flat" checked={type === 'Flat'} onChange={(e) => setType(e.target.name)} />
                    <label className="ms-2" htmlFor="gender-radio-flat" >Flat</label>
                </div>
                <div>
                    <input id="gender-radio-house" type="checkbox" name="Independent House" checked={type === 'Independent House'} onChange={(e) => setType(e.target.name)} />
                    <label className="ms-2" htmlFor="gender-radio-house" >Independent House</label>
                </div>
                <div>
                    <input id="gender-radio-anytype" type="checkbox" name="any" checked={type === 'any'} onChange={(e) => setType(e.target.name)} />
                    <label className="ms-2" htmlFor="gender-radio-anytype" >Any</label>
                </div>
            </div>
            <div className="bg-white border p-2 mt-2">
                <div>Rent</div>

                <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium">{`max budget - ${rent}`}</label>
                <input onChange={(e) => setRent(e.target.value)} id="minmax-range" type="range" min="0" max="100000" step="1000" value={rent} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            </div>
            <div className="bg-white border p-2 mt-2">
                <div>Sharing</div>
                <div>
                    <input id="sharing-radio-yes" type="checkbox" name="yes" checked={sharing} onChange={(e) => setSharing(e.target.checked)} />
                    <label className="ms-2" htmlFor="sharing-radio-yes" >Single</label>
                </div>
               
            </div>

            <div className="bg-white border p-2 mt-2">

                <div>Other</div>
                <div>
                    <input id="parking-radio-yes" type="checkbox" name="yes" checked={parking} onChange={(e) => setParking(e.target.checked)} />
                    <label className="ms-2" htmlFor="parking-radio-yes" >Parking</label>
                </div>
                <div>
                    <input id="furnished-radio-yes" type="checkbox" name="yes" checked={furnished} onChange={(e) => setFurnished(e.target.checked)} />
                    <label className="ms-2" htmlFor="furnished-radio-yes" >Furnished</label>
                </div>
                <div>
                    <input id="washroom-radio-yes" type="checkbox" name="yes" checked={withWashroom} onChange={(e) => setWithWashroom(e.target.checked)} />
                    <label className="ms-2" htmlFor="washroom-radio-yes" >With Washroom</label>
                </div>
                <div>
                    <input id="balcony-radio-yes" type="checkbox" name="yes" checked={balcony} onChange={(e) => setBalcony(e.target.checked)} />
                    <label className="ms-2" htmlFor="balcony-radio-yes" >Balcony</label>
                </div>


            </div>
        </div>
    )
}