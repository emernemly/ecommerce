import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Product from './Product'

const ProductsList = () => {
    let api_url = "https://fakestoreapi.com/products";

    let [products, setProducts] = useState([]);

    useEffect(()=>{
      axios.get(api_url).then(res =>{
        setProducts(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    },[])
    return(
  <>
  <h1 className='text-center p-3'>Products</h1>
   <div className="container">
    <div className="row"> 
    {
  products.forEach((product)=>{
    return <h1>dd</h1>
})
}
        </div>
    </div>
  </>  
  )
    
   
}

export default ProductsList
  


