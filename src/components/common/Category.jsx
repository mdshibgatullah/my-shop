import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Hooks from './Hooks'

const Category = () => {
    const {category} = Hooks()
  return (
    <div>
        <Container>
            <div className="d-flex justify-content-between ">
                {
                category.map((cat, i)=> (
                    <div key={i} className='category card border-0 p-3 d-flex align-items-center justfy-content-center gap-2'>
                        <img src={cat.image} alt="" width={100}/>
                        <p className=''>{cat.name}</p>
                        <p className='text-secondary'>{cat.items} Items</p>
                    </div>
                ))
            }
            </div>
        </Container>
    </div>
  )
}

export default Category