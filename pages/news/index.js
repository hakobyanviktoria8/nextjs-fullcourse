import React from 'react'

function News({news}) {
    console.log(news);
  return (
    <div>
        <h1> All News</h1>
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

    return {
        props :{
            news: data
        }
    }
}