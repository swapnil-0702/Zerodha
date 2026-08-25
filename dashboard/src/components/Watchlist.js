import React, { useEffect, useState } from "react";

import { Tooltip, Grow } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { stocks as initialStocks } from "../data/data";
import { GeneralContext } from "./GeneralContext";
import { DoughnotChart } from "./DoughnotChart";

const WatchList = () => {
  const [stocks, setStocks] = useState(initialStocks);

  // ===============================
  // FETCH STOCK DATA FROM BACKEND
  // ===============================
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        console.log("FETCH FUNCTION CALLED");

        // Take stock symbols from data.js
        const symbols = initialStocks.map((stock) => stock.name).join(",");

        console.log("SYMBOLS:", symbols);

        const response = await fetch(
          `https://stock-api.zerodha-stock-api.workers.dev/stock/list?symbols=${symbols}`,
        );

        const data = await response.json();

        console.log("API STOCK DATA:", data);

        // Backend returns:
        // {
        //   status: "success",
        //   stocks: [...]
        // }

        if (data.status === "success" && Array.isArray(data.stocks)) {
          setStocks(data.stocks);
        }
      } catch (error) {
        console.error("ERROR FETCHING STOCKS:", error);
      }
    };

    fetchStocks();
  }, []);

  // ===============================
  // CHART DATA
  // ===============================

  const labels = stocks.map((stock) => stock.name || stock.symbol);

  const prices = stocks.map(
    (stock) => stock.price ?? stock.last_price?.value ?? 0,
  );

  // ===============================
  // COLORS
  // ===============================

  const backgroundColors = [
    "rgba(0, 102, 204, 0.25)",
    "rgba(54, 94, 204, 0.25)",
    "rgba(0, 150, 136, 0.25)",
    "rgba(121, 85, 200, 0.25)",
    "rgba(3, 169, 244, 0.25)",
    "rgba(63, 81, 181, 0.25)",
    "rgba(0, 188, 212, 0.25)",
    "rgba(103, 58, 183, 0.25)",
  ];

  const borderColors = [
    "rgba(0, 102, 204, 1)",
    "rgba(54, 94, 204, 1)",
    "rgba(0, 150, 136, 1)",
    "rgba(121, 85, 200, 1)",
    "rgba(3, 169, 244, 1)",
    "rgba(63, 81, 181, 1)",
    "rgba(0, 188, 212, 1)",
    "rgba(103, 58, 183, 1)",
  ];

  const data = {
    labels: labels,

    datasets: [
      {
        label: "Price",

        data: prices,

        backgroundColor: stocks.map(
          (_, index) => backgroundColors[index % backgroundColors.length],
        ),

        borderColor: stocks.map(
          (_, index) => borderColors[index % borderColors.length],
        ),

        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      {/* SEARCH */}

      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />

        <span className="counts">{stocks.length} / 50</span>
      </div>

      {/* WATCHLIST */}

      <ul className="list">
        {stocks.map((stock, index) => (
          <WatchListItem stock={stock} key={stock.symbol || index} />
        ))}
      </ul>

      {/* ONE CHART */}

      <DoughnotChart data={data} />
    </div>
  );
};

// ==================================
// WATCHLIST ITEM
// ==================================

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const { openBuyWindow, openSellWindow } = React.useContext(GeneralContext);

  // ===============================
  // GET CORRECT DATA FROM API
  // ===============================

  const name = stock.name || stock.symbol || "";

  const price = stock.price ?? stock.last_price?.value ?? 0;

  const change =
    stock.percent ?? stock.percent_change?.value ?? stock.change ?? 0;

  // ===============================
  // CHECK UP / DOWN
  // ===============================

  const isDown =
    typeof stock.isDown === "boolean" ? stock.isDown : Number(change) < 0;

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        {/* STOCK NAME */}

        <p className={isDown ? "down" : "up"}>{name}</p>

        <div className="itemInfo">
          {/* PERCENT CHANGE */}

          <span className="percent">
            {Number(change) > 0 ? "+" : ""}
            {change}%
          </span>

          {/* ARROW */}

          {isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon className="up" />
          )}

          {/* PRICE */}

          <span className="price">{price}</span>
        </div>
      </div>

      {/* ACTIONS */}

      {showWatchlistActions && (
        <span className="actions">
          {/* BUY */}

          <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
            <button
              className="buy"
              type="button"
              onClick={() => openBuyWindow(stock)}
            >
              B
            </button>
          </Tooltip>

          {/* SELL */}

          <Tooltip
            title="Sell"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button
              className="sell"
              type="button"
              onClick={() => openSellWindow(stock)}
            >
              S
            </button>
          </Tooltip>

          {/* MORE */}

          <button className="action-button" type="button">
            o
          </button>
        </span>
      )}
    </li>
  );
};

export default WatchList;
