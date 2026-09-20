import React, { useEffect, useState } from 'react'

const Hooks = () => {
        const [category, setCategory] = useState([])
        const [product, setProduct] = useState([])

        useEffect(()=>{
            fetch('category.json')
            .then(res=>res.json())
            .then(data=> setCategory(data))
        }, [])


        useEffect(()=>{
            fetch('product.json')
            .then(res=>res.json())
            .then(data=> setProduct(data))
        }, [])
  return {category, product}
}

export default Hooks