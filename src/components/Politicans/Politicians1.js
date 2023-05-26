/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import p1 from '../Images/Politican/p1.jpg'
import p2 from '../Images/Politican/p2.jpg'
import p3 from '../Images/Politican/p3.jpg'
import p4 from '../Images/Politican/p4.jpg'
import p5 from '../Images/Politican/p5.jpg'
import p6 from '../Images/Politican/p6.jpg'

import './politicans.css'


export default class Politicians1 extends Component {
  render() {
    return (
      <div>
        <div className='m-5'>
          .
        </div>
        <div className="container my-3">
          <div className="box">
            <img src={p1} alt="Image 1" className='img1' />
            <h5>Imran Khan Niazi</h5>
          </div>
          <div className="box">
            <img src={p2} alt="Image 2" className='img1' />
            <h5>Zulfiqar Ali Bhutto</h5>
          </div>
          <div className="box">
            <img src={p3} alt="Image 2" className='img1' />

            <h5>Mian Muhammad Nawaz Shareef</h5>
          </div>
        </div> 
        <div className="container my-3">
          <div className="box">
            <img src={p4} alt="Image 1" className='img1' />
            <h5>Khadim Hussain Rizvi</h5>
          </div>
          <div className="box">
            <img src={p5} alt="Image 2" className='img1' />
            <h5>Vladmir Putin</h5>
          </div>
          <div className="box">
            <img src={p6} alt="Image 2" className='img1' />

            <h5>Altaf Hussain Bhai</h5>
          </div>
        </div>
      </div>
    )
  }
}
