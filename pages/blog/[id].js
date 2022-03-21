import React from 'react'
import {useRouter} from "next/router"

function BlogId() {
    const router = useRouter().query.id
    console.log(router);
  return (
    <div>Blog Id is {router}</div>
  )
}

export default BlogId