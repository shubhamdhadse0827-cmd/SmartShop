import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../NewCollections/NewCollections'
import NewsLatter from '../Components/NewsLatter/NewsLatter'
import Footer from '../Components/Footer/Footer'
import Reviews from "../Components/Reviews/Reviews";
import Assistent from '../Components/Assistent/Assistent'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Reviews/>
      <NewsLatter/>  
      <Assistent/>
    </div>
  )
}

export default Shop