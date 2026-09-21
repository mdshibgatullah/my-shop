import React from 'react'
import Hooks from './Hooks'
import { Container } from 'react-bootstrap'


const Products = () => {
    const {category} = Hooks()
    const {product} = Hooks()
  return (
    <div className='my-5'>
        <Container>
            <div className="d-flex justify-content-between">
                <div>
                    <h2>Popular <span className='text-success'>Product</span></h2>
                    <p>Shop online for new arrivals and get free shipping!</p>
                </div>

                <div>
                    <div className='d-flex gap-3'>
                    {
                        category.map((cat, i)=> (
                        <p style={{cursor: 'pointer'}} key={i}>{cat.name}</p>
                        ))
                    }
                    </div>
                </div>
            </div>


            <div className='pt-4'>
                {
                    product.map((pro, i)=>(
                        <div key={i}>
                            <div className='d-flex flex-column'>
                                <img src={pro.image} alt="" width={200}/>
                                <p>{pro.category}</p>
                                <h4>{pro.name}</h4>
                                <p>{pro.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Container>
        {
        product.map((pro, i)=> (
        <div key={i}>{pro.name}</div>
        ))
        }
    </div>
  )
}

export default Products