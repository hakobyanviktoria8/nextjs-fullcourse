import React from 'react'
import {useRouter} from "next/router"

function Product({product}) {
  const router = useRouter()
  console.log(product);

  if(router.isFallback){
    return <h1>Loading ...</h1>
  }

  return (
    <div>
        <h1>Product id is {product.id}</h1>
        <div style={{display:"flex"}}>
          <p>{product.title}</p>
          <h3  style={{paddingLeft:"15px"}}>{product.price}</h3>
        </div>
        Completed: <input type="checkbox" checked={product.completed}/>

    </div>
  )
}

export default Product


export async function getStaticProps(context){
  const {params} = context
  const res = await fetch(`http://localhost:4000/products/${params.productId}`)
  const data = await res.json()

  return{
    props:{
      product: data
    }
  }
}

export async function getStaticPaths(){
  return{
    paths:[
      {
      params: {productId:"1"}
      }
    ],
    fallback:true
  }
}