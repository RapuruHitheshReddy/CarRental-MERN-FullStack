import React from 'react'
import Hero from '../components/hero'
import FuturedSection from '../components/FuturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'


const Home = () => {
  return (
    <>
      <Hero />
      <FuturedSection/>
      <Banner/>
      <Testimonial/>
      <NewsLetter />
    </>
  )
}

export default Home
