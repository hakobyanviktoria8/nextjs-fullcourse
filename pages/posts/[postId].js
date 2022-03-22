import React from 'react'
import {useRouter} from "next/router"

function PostId({post}) {
    const router  = useRouter()
    const {postRouter} = router.query
    // console.log(post);
  return (
    <div>
      Post Id {post.id}
      <hr/>
      <h1>{post.id}. {post.title}</h1>
      <p>{post.body}</p> 
    </div>
  )
}

export default PostId

export async function getStaticPaths(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()
  const paths = data.map(post=>{
    return{
      params:{
        postId:`${post.id}`
      }
    }
  })
  return {
    paths,
    // if fallback is false, then any paths not included getStaticPaths will return 404 page
    fallback: false
  }
}

export async function getStaticProps(context){
  const {params} = context
  console.log("context is _________",context)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await res.json()
  return {
      props:{
          post : data
      }
  }
}