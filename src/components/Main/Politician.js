import React, { Component } from 'react'
import Navbar1 from '../Home/Navbar'
import Politicians1 from '../Politicans/Politicians1'
import RatingForm from '../Politicans/politicanRating'
import Footer from '../Home/Footer'

export default class Politician extends Component {
  render() {
    return (
      <div>
        <Navbar1/>
        <Politicians1/>
        <RatingForm/>
        <Footer/>
      </div>
    )
  }
}
