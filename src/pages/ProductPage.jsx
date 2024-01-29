import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Product'

const ProductPage = () => {
  const params = useParams()
  const [data,setdata] = useState({})

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(json=>setdata(json))
  },[])
  return (
    <div>
      <Product data={data} />
    </div>
  )
}

export default ProductPage