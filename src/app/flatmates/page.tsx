import AppBar from "../components/lib/appBar/page"
import FlatMateList from "../components/lib/flatmate/FlatMateList/page"

 
export default async function Page() {
    
    return(
        <div className="h-screen">
            <AppBar/>
            
            <FlatMateList/>
           
        </div>
    )
}