import React, { useState, useEffect } from "react";
import axios from "axios";

import { positions } from "../data/data";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodha-backend-4s7s.onrender.com/allPositions")
      .then((res) => {
        setAllPositions(res.data);
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((position, index) => (
              <tr key={index}>
                <td>{position.name}</td>

                <td>{position.qty}</td>

                <td>₹{position.avg}</td>

                <td>₹{position.price}</td>

                <td className={position.pnl >= 0 ? "profit" : "loss"}>
                  {position.pnl >= 0 ? "+" : "-"}₹{Math.abs(position.pnl)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
