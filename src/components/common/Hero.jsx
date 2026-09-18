import React from 'react'
import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className='my-5 ' id='hero_bg'>
        <Container>
        <div className='d-flex flex-column gap-3 col-12 col-md-6'>
            <h3 className='text-success'>70% Off For This Winter</h3>
            <h1>Bigest Sale For Winter Man & Woman</h1>
            <button className='btn btn-success' style={{width: '150px'}}>Shop Now</button>
        </div>
        </Container>
    </section>
  )
}

export default Hero