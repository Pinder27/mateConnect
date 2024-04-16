import AppBar from "../components/lib/appBar/page"
import FlatMateList from "../components/lib/flatmate/FlatMateList/page"
 
export default async function Page() {
    return(
        <div>
            <AppBar/>
            <FlatMateList/>
        </div>
    )
}