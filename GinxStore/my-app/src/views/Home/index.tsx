import React from 'react'
import Ecommerce from './sections/ecommerce'
import Sales from './sections/Sales'
import Highligths from './sections/Highligths'
import TopRated from './sections/topRated'
import FAQ from './sections/FAQ'
import Footer from '../footer/footer'
// import Exclusive from '../footer/Exclusive'


 const Home = () => {
  return (
    <div>
      <Ecommerce/>
      <Sales/>
      <Highligths/>
      <TopRated/>
      <FAQ/>
      {/* <Exclusive/> */}
      <Footer/>
    </div>
  )
}

export default Home;

