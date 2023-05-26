/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import p1 from '../Images/Party/pp1.jpg'
import p2 from '../Images/Party/pp2.jpg'
import p3 from '../Images/Party/pp3.jpg'
import p4 from '../Images/Party/pp4.jpg'
import p5 from '../Images/Party/pp5.jpg'
import p6 from '../Images/Party/pp6.jpg'


import './party.css'


export default class Politicians1 extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'gray'}}>
        <div className='m-5'>
          .
        </div>
        <div className="container my-3">
          <div className="box">
            <img src={p1} alt="Image 1" className='img1' />
            <h5>Pakistan Tehreek E Insaf</h5>
          </div>
          <div className="box">
            <img src={p2} alt="Image 2" className='img1' />
            <h5>Pakistan Peoples Party</h5>
          </div>
          <div className="box">
            <img src={p3} alt="Image 2" className='img1' />

            <h5>Pakistan Muslim League Nawaz</h5>
          </div>
        </div> 
        <div className="container my-3">
          <div className="box">
            <img src={p4} alt="Image 1" className='img1' />
            <h5>Tehreek E Labaik Pakistan</h5>
          </div>
          <div className="box">
            <img src={p5} alt="Image 2" className='img1' />
            <h5>ЕДИНАЯ РОССИЯ</h5>
          </div>
          <div className="box">
            <img src={p6} alt="Image 2" className='img1' />

            <h5>Muttahida Qaumi Movement</h5>
          </div>
        </div>
      </div>
    )
  }
}
