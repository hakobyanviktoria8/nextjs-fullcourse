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
        <Link href="/blog"> Blog</Link> | 
        <Link href="/users"> Users</Link> |
        <Link href="/products-json"> Products</Link> |
        <Link href="/news"> News</Link> |
        <Link href="/dashboard-data"> Dashboard</Link> |
        <button 
          onClick={handleClick}
          style={{
            background: "none",
            border: "none",
            outline: "none",
          }}
        > Posts | </button>
        <Link href="/events"> Events</Link> |

        <hr/>
        <h1>Home page</h1>    

    </div>
  )
}

export default Home