import React from 'react'
import Layouts from '../common/Layouts'
import Hero from '../common/Hero'
import Category from '../common/Category'
import Products from '../common/Products'

const Home = () => {
  return (
    <Layouts>
        <Hero />
        <Category />
        <Products />
    </Layouts>
  )
}

export default Home