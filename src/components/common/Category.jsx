import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const Category = () => {
    const [category, setCategory] = useState([])
    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=> setCategory(data))
    }, [])
  return (
    <div>
        <Container>
            {
            category.map((cat, i)=> (
                <div key={i} className=''>
                    <img src={cat.image} alt="" width={100}/>
                    <p className=''>{cat.name}</p>
                    <p>{cat.items}</p>
                </div>
            ))
            }
        </Container>
    </div>
  )
}

export default Category