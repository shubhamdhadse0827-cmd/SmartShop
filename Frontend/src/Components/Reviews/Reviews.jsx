import React from "react";
import "./Reviews.css";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    image: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    review: "Amazing quality products! Delivery was very fast and packaging was great."
  },
  {
    id: 2,
    name: "Priya Verma",
    image: "https://i.pravatar.cc/100?img=5",
    rating: 4,
    review: "SmartShop has great collections. Prices are affordable and service is good."
  },
  {
    id: 3,
    name: "Amit Patel",
    image: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    review: "One of the best online shopping experiences. Highly recommended!"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    image: "https://i.pravatar.cc/100?img=10",
    rating: 4,
    review: "Good quality clothes and easy return process. Loved the experience."
  }
];

const ReviewsSlider = () => {
  return (
    <div className="reviews-section">

      <h1>What Our Customers Say</h1>

      <div className="slider">

        <div className="slide-track">

          {reviews.concat(reviews).map((item, index) => (
            <div className="review-card" key={index}>

              <img src={item.image} alt="" />

              <h3>{item.name}</h3>

              <div className="rating">
                {"⭐".repeat(item.rating)}
              </div>

              <p>{item.review}</p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ReviewsSlider;