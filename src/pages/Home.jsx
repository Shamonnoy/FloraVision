import React from 'react'
import Hero from '../components/Hero'
import TopSellingPlants from '../components/TopSellingPlants'
import CustomerReview from '../components/CustomerReview'
import BestO2Plants from '../components/BestO2Plants'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#1B2316] text-[#FFFFFF]">
        <Hero/>
        <TopSellingPlants />
        <CustomerReview />
        <BestO2Plants />
        <Footer />
    </div>
  )
}

export default Home