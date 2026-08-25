import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:3002/allOrders");

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const data = await response.json();

      setOrders(data);
    } catch (error) {
      console.log("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="page-container">
      <h1>Orders</h1>

      {orders.length === 0 ? (
        <div className="empty-page">
          <h2>No orders yet</h2>

          <p>Once you place an order, it will appear here.</p>

          <button>Start Trading</button>
        </div>
      ) : (
        <div className="orders-table">
          <div className="orders-header">
            <span>Instrument</span>
            <span>Qty.</span>
            <span>Price</span>
            <span>Type</span>
          </div>

          {orders.map((order) => (
            <div className="order-row" key={order._id}>
              <span>{order.name || order.symbol}</span>

              <span>{order.qty}</span>

              <span>₹{order.price}</span>

              <span
                className={order.mode === "BUY" ? "buy-order" : "sell-order"}
              >
                {order.mode}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
