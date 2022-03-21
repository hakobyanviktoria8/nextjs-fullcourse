import React from 'react'
import Link from 'next/link'

function Blog() {
  return (
    <div>
         <Link href="/">Home</Link>
        <hr/>
        <h1>Blog page</h1>
        <hr/>
        <Link href="/blog/1" replace>Blog 1</Link>
        <Link href="/blog/2">Blog 2</Link>
    </div>
  )
}

export default Blog