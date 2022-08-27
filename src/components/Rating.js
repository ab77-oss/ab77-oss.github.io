import React from 'react'
import image from '../assets/illustration-thank-you.svg';
import { useParams } from 'react-router';
import '../sass/index.css'

function Rating() {
let { _id } = useParams();

  return (
    <>
        <div className="container">
            <div className='img2' >
              <img src={image} alt='image2' />
            </div>
            <div className='head'>You selected {_id} out of 5</div>
            <div className='title'>Thank you!</div>
            <p className='text'>We appreciate you taking the time to give a rating. If you ever need more support, 
              don’t hesitate to get in touch!</p>
        </div>
    </>
  )
}

export default Rating