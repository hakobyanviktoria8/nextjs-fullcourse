import React from 'react'
import {useRouter} from "next/router"

function PostId() {
    const router  = useRouter()
    const {post} = router.query
    console.log(post);
  return (
    <div>Post Id {post}</div>
  )
}

export default PostId