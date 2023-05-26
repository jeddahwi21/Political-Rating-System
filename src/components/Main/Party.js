import React, { Component } from 'react'
import Navbar1 from '../Home/Navbar'
import PoliticalParty from '../Political-Parties/Political_Party'
import PartyRating from '../Political-Parties/partyRating'
import Footer from '../Home/Footer'


export default class Party extends Component {
  render() {
    return (
      <div>
        <Navbar1/>
        <PoliticalParty/>
        <PartyRating/>
        <Footer/>


      </div>
    )
  }
}
