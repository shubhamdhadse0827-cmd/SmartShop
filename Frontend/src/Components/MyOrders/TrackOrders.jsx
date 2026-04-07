import React from "react";
import "../../Components/MyOrders/All.css";

const steps = [
  "Placed",
  "Processing",
  "Shipped",
  "Out",
  "Delivered"
];

const TrackOrders = ({ currentStep }) => {

  const progress = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="track-wrapper">

      {/* Line */}
      <div className="track-line">
        <div
          className="track-progress"
          style={{ width: `${progress}%` }}
        ></div>

        {/* 🚚 Truck */}
<div className="truck" style={{ left: `${progress}%` }}>
  <span style={{ transform: "scaleX(-1)", display: "inline-block" }}>
    🚚
  </span>
</div>
      </div>

      {/* Steps */}
      <div className="track-steps">
        {steps.map((step, index) => (
          <div key={index} className="track-step">
            <div className={`circle ${index <= currentStep ? "active" : ""}`}></div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackOrders;