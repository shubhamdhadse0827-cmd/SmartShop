import React from "react";
import "./OffersPage.css";
import offerVideo from "../../assets/Offers.mp4";

const OffersPage = () => {
    const offers = [
  {
    id: 1,
    title: "Summer Sale 50% OFF",
    desc: "Get amazing discounts on summer clothes.",
    img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free",
    desc: "Applicable on selected men's wear.",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
  },
  {
    id: 3,
    title: "Flat 30% OFF",
    desc: "Special discount on kids fashion.",
   img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
  },

  // 🔥 New 3 Cards
  {
    id: 4,
    title: "Up to 70% OFF",
    desc: "Mega discount on winter collection.",
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716f"
  },
  {
    id: 5,
    title: "Festive Sale",
    desc: "Special deals on all categories.",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  },
  {
    id: 6,
    title: "Flat ₹500 OFF",
    desc: "On orders above ₹1999.",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  }
];
  
  return (
      <div className="offers-page">
        <div className="offer-banner">
            <video autoPlay loop muted playsInline>
                <source src={offerVideo} type="video/mp4" />
            </video>
        </div>

        <h1>🔥 Latest Offers</h1>
        <div className="offers-container">
            {offers.map((offer) => (
            <div className="offer-card" key={offer.id}>
                <img src={offer.img} alt="" />
                <h2>{offer.title}</h2>
                <p>{offer.desc}</p>
                <button>Shop Now</button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;