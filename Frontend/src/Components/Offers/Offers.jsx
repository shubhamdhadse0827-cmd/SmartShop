import React, { useEffect, useState } from 'react';
import "./Offers.css";
import exclusive from "../../assets/Offer.png";
import { useNavigate } from 'react-router-dom';

const Offers = () => {
  const navigate = useNavigate();

  const [time, setTime] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='offers'>
      
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>

        {/* Timer */}
        <div className="timer">
          <p>🔥 Offer Ends In:</p>
          <div className="time-box">
            <span>{time.hours}h</span>
            <span>{time.minutes}m</span>
            <span>{time.seconds}s</span>
          </div>
        </div>

        <button onClick={() => navigate("/offers")}>
          Check Now
        </button>
      </div>

      <div className="offers-right">
        <img src={exclusive} alt="offer" />
      </div>

    </div>
  );
};

export default Offers;