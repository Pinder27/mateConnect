"use clent"
import Card from "../card/page"


interface Post {
    id: number;
    title: string;
    description: string;
    location: string;
    date: string;
  }
export default function Page({List}:{List:Post[]}){
    return(
        <div>
            {List.map((post)=><Card title={post.title} description={post.description} location={post.location} date={post.date} />)}
        </div>
    )
}