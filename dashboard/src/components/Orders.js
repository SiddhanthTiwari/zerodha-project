import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/sellOrder")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch orders:", err);
      });
  }, []);

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/placeOrder"} className="btn">Get started</Link>
        </div>
      ) : (
        <div className="order-list">
          <h2>All Orders</h2>
          <ul>
            {allOrders.map((order, index) => (
              <li key={index}>
                <strong>{order.name}</strong> — Qty: {order.qty}, Price: ₹{order.price}, Mode: {order.mode}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Orders;
