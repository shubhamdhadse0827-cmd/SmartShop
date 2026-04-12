import React from 'react'
import "./NewsLatter.css"

const NewsLatter = () => {
  return (
    <div className='newsLatter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsLatter and stay updated</p>
        <div>
            <input type="email" placeholder='Enter the email'/>
            <button>Subscibe</button>
        </div>
    </div>
  )
}

export default NewsLatter;