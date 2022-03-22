import React from 'react'

function Products({products}) {
  return (
    <div>
        <h1>All products</h1>
        {products.map(product=>
        <div key={product.id}>
            <h2>{product.title.slice(0,20)} - {product.price}</h2>
        </div>
        )}
    </div>
  )
}

export default Products

export async function getStaticProps(){
    const res = await fetch(`http://localhost:4000/products`)
    const data = await res.json()
  
    return{
      props:{
        products: data
      }
    }
  }