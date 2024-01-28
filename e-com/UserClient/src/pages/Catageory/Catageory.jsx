import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import api from '../../api';

export default function Catageory(props) {
    let { slug } = useParams(); 
    const [productsBySlug, setproductsBySlug] = useState([])

    useEffect(() => {
        console.log(slug)
      const category = api.get(`/products/:${slug}`).then((data) => {
          console.log("data", data)
        //   setproductsBySlug()
      })
    //   console.log("category", productsBySlug)
  
    },[])
  return (
    <div>Catageory {slug}</div>
  )
}
