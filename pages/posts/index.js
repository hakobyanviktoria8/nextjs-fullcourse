import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

function Posts() {
    const router = useRouter()
    console.log(router);
  return (
    <div>
        <Link href="/">Home</Link>
        <hr/>
        <h1>Posts page</h1>
        {
        router.pathname &&
        <p>lorem4 {router.pathname}</p>
        }

    </div>
  )
}

export default Posts