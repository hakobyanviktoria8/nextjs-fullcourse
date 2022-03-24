import React from 'react'

function Category({news,category}) {

    console.log(news,category);
  return (
    <div>
        <h1>Category is {category}</h1>
        {
            news.map(x=>
                <div key={x.id}>
                    <h2>{x.title}</h2>
                    <p>{x.description}</p>
                </div>
                )
        }
    </div>
  )
}

export default Category

export async function getServerSideProps(context){
    const {params} = context
    const {category} = params
    const res = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await res.json()

    return {
        props: {
            news: data,
            category
        }
    }
}