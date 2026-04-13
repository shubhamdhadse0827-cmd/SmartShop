import React, { useState } from 'react'
import "./NewsLatter.css"

const NewsLatter = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setMessage("⚠️ Please enter your email");
      return;
    }

    // simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMessage("❌ Invalid email format");
      return;
    }

    setMessage("✅ Successfully Subscribed!");
    setEmail("");
  };

  return (
    <div className='newsLatter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>

        <div className='subscribe-box'>
            <input 
              type="email" 
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              className='subscribe-btn'
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
        </div>

        {message && <span className="message">{message}</span>}
    </div>
  )
}

export default NewsLatter;