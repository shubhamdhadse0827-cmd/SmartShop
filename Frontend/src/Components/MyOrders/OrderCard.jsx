import React, { useState } from "react";
import TrackingTimeline from "./TrackOrders";

const OrderCard = ({ order }) => {
  const [showTrack, setShowTrack] = useState(false);

  return (
    <div className="order-card">
      <div className="order-header">
        <h3>Order #{order.id}</h3>
        <span className={`status ${order.status.toLowerCase()}`}>
          {order.status}
        </span>
      </div>

      <p>Date: {order.date}</p>
      <p>Amount: ₹{order.amount}</p>

      <button onClick={() => setShowTrack(!showTrack)}>
        Track Order 🚚
      </button>

      {showTrack && <TrackingTimeline steps={order.steps} />}
    </div>
  );
};

export default OrderCard;