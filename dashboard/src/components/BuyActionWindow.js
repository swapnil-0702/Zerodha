import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Grow } from "@mui/material";

import { GeneralContext } from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = () => {
  const { showBuyWindow, selectedStock, orderType, closeBuyWindow } =
    useContext(GeneralContext);

  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (selectedStock) {
      setQty(1);

      const stockPrice =
        selectedStock.price ?? selectedStock.last_price?.value ?? 0;

      setPrice(stockPrice);
    }
  }, [selectedStock]);

  if (!showBuyWindow || !selectedStock) {
    return null;
  }

  // ===============================
  // GET STOCK NAME
  // ===============================

  const stockName = selectedStock.name || selectedStock.symbol || "";

  // ===============================
  // BUY / SELL ORDER
  // ===============================

  const handleBuyClick = async (event) => {
    event.preventDefault();

    if (qty <= 0 || price <= 0) {
      alert("Enter valid quantity and price");
      return;
    }

    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: stockName,
        symbol: selectedStock.symbol || stockName,
        qty: Number(qty),
        price: Number(price),
        mode: orderType,
      });

      alert(`${orderType} order placed for ${stockName}`);

      closeBuyWindow();

      window.location.reload();
    } catch (error) {
      console.error("Order save failed:", error);

      alert("Order could not be saved. Please try again.");
    }
  };

  return (
    <Grow in>
      <form className="order-form" onSubmit={handleBuyClick}>
        {/* ===============================
            HEADER
        =============================== */}

        <div
          className={`order-form-header ${
            orderType === "SELL" ? "sell-order" : ""
          }`}
        >
          <div>
            <span>{orderType}</span>

            <h3>{stockName}</h3>
          </div>

          <button
            className="order-close"
            type="button"
            onClick={closeBuyWindow}
          >
            ×
          </button>
        </div>

        {/* ===============================
            INPUT FIELDS
        =============================== */}

        <div className="order-form-fields">
          <label>
            Qty
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(event) => setQty(event.target.value)}
            />
          </label>

          <label>
            Price
            <input
              type="number"
              min="0"
              step="0.05"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
        </div>

        {/* ===============================
            MARGIN
        =============================== */}

        <div className="margin-required">
          Margin required ₹{(Number(qty) * Number(price)).toFixed(2)}
        </div>

        {/* ===============================
            BUTTONS
        =============================== */}

        <div className="order-form-footer">
          <button
            className={
              orderType === "SELL" ? "sell-order-button" : "buy-order-button"
            }
            type="submit"
          >
            {orderType}
          </button>

          <button
            className="cancel-order-button"
            type="button"
            onClick={closeBuyWindow}
          >
            Cancel
          </button>
        </div>
      </form>
    </Grow>
  );
};

export default BuyActionWindow;
