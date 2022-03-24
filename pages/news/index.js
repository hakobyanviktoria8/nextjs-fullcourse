import React from 'react'
import {useRouter} from "next/router"

function News({news}) {
    const router = useRouter()
    // console.log(news);
  return (
    <div>
        <h1> All News {news.length}</h1>
        <button onClick={()=> router.push("/news/sports")}>sports</button>
        <button onClick={()=> router.push("/news/politics")}>politics</button>
        {news.map(x=>
            <div key={x.id}>
                <h2>{x.title} | {x.category}</h2>
            </div>
        )}      
    </div>
  )
}

export default News

export async function getServerSideProps(){
    const res = await fetch("http://localhost:4000/news")
    const data = await res.json()
    console.log("News component rendering");

    return {
        props :{
            news: data
        }
    }
}