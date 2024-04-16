import LoginForm from "./loginForm/page"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NEXT_AUTH } from "../lib/auth";
export default async function Page() {
    const session = await getServerSession(NEXT_AUTH);
  console.log({ session });

  if(session?.user){
    redirect("/")
  }
    return(
       <LoginForm/>
    )
}