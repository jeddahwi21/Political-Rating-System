import React, { Component } from 'react'
import Navbar from '../Home/Navbar'
import HomePage from '../Home/Header'
import Features from '../Home/Section1'
import Footer from '../Home/Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <HomePage/>
        <Features/>
        <Footer/>
      </div>
    )
  }
}
