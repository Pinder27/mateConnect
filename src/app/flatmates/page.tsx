import AppBar from "../components/lib/appBar/page"
import FlatMateList from "../components/lib/flatmate/FlatMateList/page"

 
export default async function Page() {
    console.log("nextauth yrl",process.env.NEXTAUTH_URL);
    console.log("nextauth secrtet",process.env.NEXTAUTH_SECRET);
    console.log("urldb",process.env.DATABASE_URL);
    return(
        <div className="h-screen">
            <AppBar/>
            
            <FlatMateList/>
           
        </div>
    )
}