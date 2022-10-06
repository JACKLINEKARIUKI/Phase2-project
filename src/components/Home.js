import React from 'react'
import MostPopularList from './MostPopularList'
import PopularReviews from './PopularReviews'
import ListItems from './ListItems'
import Logo from './Logo'
import Search from './Search'
import Navbar from './Navbar'
import Footer from './Footer'


function Home() {
  
  return (
    <div>
      <Logo />
      <Search />
      <Navbar />
      <ListItems />
      <PopularReviews />
      <MostPopularList />
      <Footer />
    </div>
  )
}

export default Home