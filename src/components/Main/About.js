import React, { Component } from 'react'
import Navbar1 from '../Home/Navbar'
import Footer from '../Home/Footer'
import AboutPage from '../About/AboutPage'

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar1/>
        <AboutPage/>
        <Footer/>
      </div>
    )
  }
}
