import React from 'react'
import Profile from "./Profile/Profile"
import Footer from './Footer/Footer'
import Header from './Header'
import "./Home.css"

const Home = (props) => {
  return (
    <div className='home_container' id={props.id || ""}>
        <Header />
        <Profile />
        <Footer />
    </div>
  )
}

export default Home