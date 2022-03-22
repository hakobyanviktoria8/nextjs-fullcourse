import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

function Posts({posts}) {
    const router = useRouter()
    // console.log(router, posts);
  return (
    <div>
        <Link href="/">Home</Link>
        <hr/>
        <h1>Posts page</h1>
        {
        router.pathname &&
            <p>pathname is {router.pathname}</p>
        }
        <hr/>
        {
            posts.map(post=>
                <div key={post.id}>
                    <Link href = {`posts/${post.id}`}>
                        <h1>{post.id}. {post.title}</h1>
                    </Link>
                    <hr/>   
                </div>
            )
        }
    </div>
  )
}

export default Posts

export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return {
        props:{
            posts : data.slice(0,10)
        }
    }
}