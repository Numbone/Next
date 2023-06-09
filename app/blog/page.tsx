import { IPost } from '@/types';
import Link from 'next/link';
import React from 'react'

async function getData():Promise<IPost[]>{
  const response =await fetch('https://jsonplaceholder.typicode.com/posts',{
    next:{
      revalidate:60
    }
  })
  if (!response.ok) throw new Error("url")
  
  return response.json();
}
const Blog = async() => {
  const posts=await getData()
  return (
    <>
    <h1>Blog</h1>
    <ul>
      {
        posts.map((item:IPost)=>
        <li key={item?.id}><Link href={"/blog/"+item?.id}>{item?.id}. {item?.title}</Link></li>
           )
      }
     
      
    </ul>
    </>
  )
}

export default Blog