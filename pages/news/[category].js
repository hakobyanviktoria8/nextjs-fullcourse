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
    const {params,req, res, query} = context
    // console.log("_________",req, res) object
    // console.log(req.headers.cookie) // first time undefined, then make cookie name = Viki 
    res.setHeader ("Set-Cookie", ["name = Viki"])

    //sports?subcategory=swimming 
    //query can be object: { category: 'sports', subcategory: 'swimming' }
    // console.log(query) 

    const {category} = params
    const resp = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await resp.json()

    // 
    console.log("News Category component rendering");

    return {
        props: {
            news: data,
            category
        }
    }
}