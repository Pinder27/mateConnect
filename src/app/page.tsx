
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "./lib/auth";
import AppBar from "../app/components/lib/appBar/page"
import { redirect } from 'next/navigation'

export default async function Home() {
  redirect('/flatmates')
  const Session = await getServerSession(NEXT_AUTH);
  console.log("sessino",Session);
  return (
    <div>
      <AppBar/>
       {JSON.stringify(Session)}
    </div>
  );
}
