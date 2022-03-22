import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

function Home() {
    const router = useRouter()

    const handleClick = ()=>{
        router.push("/posts")
    }
  return (
    <div>
        <Link href="/blog">Blog</Link>
        <Link href="/users">Users</Link>
        <Link href="/products-json">Products</Link>
        <hr/>
        <h1>Home page</h1>    

        <button onClick={handleClick}>Posts</button>
    </div>
  )
}

export default Home