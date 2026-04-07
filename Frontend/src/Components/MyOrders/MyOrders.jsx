import React from "react";
import OrderCard from "./OrderCard";
import "../../Components/MyOrders/All.css";

const orders = [
  {
    id: "12345",
    date: "12 Mar 2026",
    amount: 1200,
    status: "Shipped",
    steps: ["Order Placed", "Processing", "Shipped"]
  },
  {
    id: "67890",
    date: "10 Mar 2026",
    amount: 800,
    status: "Processing",
    steps: ["Order Placed", "Processing"]
  }
];

const MyOrders = () => {
  return (
    <div className="orders-container">
      <h2>My Orders</h2>

      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default MyOrders;