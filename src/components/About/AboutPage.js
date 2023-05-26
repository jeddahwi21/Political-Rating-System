/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'

import d1 from '../Images/Devs/d1.jpg'
import d2 from '../Images/Devs/d2.jpg'
import d3 from '../Images/Devs/d3.jpg'

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className='m-5'>
          .
        </div>
        <div className="container my-3">
          <div className="box">
            <img src={d1} alt="Image 1" className='img1' />
            <h5>200908-Abdullah Umar</h5>
          </div>
          <div className="box">
            <img src={d2} alt="Image 2" className='img1' />
            <h5>200851-Syed Mohsin Hasan</h5>
          </div>
          <div className="box">
            <img src={d3} alt="Image 2" className='img1' />
            <h5>200815-Muhammad Junaid Ajmal</h5>
          </div>
        </div> 
      </div>
    )
  }
}
