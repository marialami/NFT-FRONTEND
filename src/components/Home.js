import React from 'react'
import Announcement from './Announcement'
import Categories from './Categories'
import Footer from './Footer'
import Navbar from './Navbar'
import Products from './Products'
import Slider from './Slider'

function Home() {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Footer />
    </div>
  )
}

export default Home

