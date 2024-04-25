import AppBar from "../components/lib/appBar/page"
import FlatMateList from "../components/lib/flatmate/FlatMateList/page"

 
export default async function Page() {
    
    return(
        <div>
            <div className="sticky top-0 z-40">
            <AppBar/>
            </div>
            
            <FlatMateList/>
           
        </div>
    )
}