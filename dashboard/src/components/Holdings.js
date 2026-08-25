import React, { useState, useEffect } from "react";
import axios from "axios";
import { Graphs } from "./Graphs";

// import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>

              <th>Qty.</th>

              <th>Avg. cost</th>

              <th>LTP</th>

              <th>Cur. val</th>

              <th>P&amp;L</th>

              <th>Net chg.</th>

              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => (
              <tr key={index}>
                <td>{stock.name}</td>

                <td>{stock.qty}</td>

                <td>₹{Number(stock.avg).toFixed(1)}</td>

                <td>₹{stock.price}</td>

                <td>₹{(stock.qty * stock.price).toFixed(2)}</td>

                <td className="profit">{stock.net}</td>

                <td className="profit">{stock.net}</td>

                <td className={stock.day.startsWith("+") ? "profit" : "loss"}>
                  {stock.day}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Graphs data={data} />
    </>
  );
};

export default Holdings;
