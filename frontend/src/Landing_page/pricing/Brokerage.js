import React, { useState } from "react";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const data = {
    equity: {
      headers: [
        "",
        "Equity delivery",
        "Equity intraday",
        "F&O - Futures",
        "F&O - Options",
      ],

      rows: [
        [
          "Brokerage",
          "Zero Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
        ],
        [
          "STT/CTT",
          "0.1% on buy & sell",
          "0.025% on the sell side",
          "0.05% on the sell side",
          "0.15% of the intrinsic value on options that are bought and exercised",
        ],
        [
          "Transaction charges",
          "NSE: 0.00307% BSE: 0.00375%",
          "NSE: 0.00307% BSE: 0.00375%",
          "NSE: 0.00183% BSE: 0",
          "NSE: 0.03553% (on premium) BSE: 0.0325% (on premium)",
        ],
        [
          "GST",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
        [
          "SEBI charges",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
        ],
        [
          "Stamp charges",
          "0.015% or ₹1500 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      ],
    },

    currency: {
      headers: [
        "",
        "Currency futures",
        "Currency options",
      ],

      rows: [
        [
          "Brokerage",
          "0.03% or ₹20 whichever is lower",
          "Flat ₹20 per executed order",
        ],
        [
          "STT/CTT",
          "No STT",
          "No STT",
        ],
        [
          "Transaction charges",
          "NSE: 0.00035%",
          "NSE: 0.0311%",
        ],
        [
          "GST",
          "18% on brokerage + transaction charges",
          "18% on brokerage + transaction charges",
        ],
        [
          "SEBI charges",
          "₹10 / crore",
          "₹10 / crore",
        ],
        [
          "Stamp charges",
          "0.0001% on buy side",
          "0.0001% on buy side",
        ],
      ],
    },

    commodity: {
      headers: [
        "",
        "Commodity futures",
        "Commodity options",
      ],

      rows: [
        [
          "Brokerage",
          "0.03% or ₹20 whichever is lower",
          "Flat ₹20 per executed order",
        ],
        [
          "STT/CTT",
          "0.01% on sell side",
          "0.125% on intrinsic value",
        ],
        [
          "Transaction charges",
          "Exchange dependent",
          "Exchange dependent",
        ],
        [
          "GST",
          "18% on brokerage + transaction charges",
          "18% on brokerage + transaction charges",
        ],
        [
          "SEBI charges",
          "₹10 / crore",
          "₹10 / crore",
        ],
        [
          "Stamp charges",
          "0.002% on buy side",
          "0.003% on buy side",
        ],
      ],
    },
  };

  const current = data[activeTab];

  return (
    <section className="container brokerage-section">

      {/* Tabs */}
      <div className="brokerage-tabs">

        <button
          className={activeTab === "equity" ? "active" : ""}
          onClick={() => setActiveTab("equity")}
        >
          Equity
        </button>

        <button
          className={activeTab === "currency" ? "active" : ""}
          onClick={() => setActiveTab("currency")}
        >
          Currency
        </button>

        <button
          className={activeTab === "commodity" ? "active" : ""}
          onClick={() => setActiveTab("commodity")}
        >
          Commodity
        </button>

      </div>

      {/* Table */}
      <div className="table-responsive">

        <table className="table brokerage-table">

          <thead>
            <tr>
              {current.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {current.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>

                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    {cell}
                  </td>
                ))}

              </tr>
            ))}
          </tbody>

        </table>

      </div>

      <p className="brokerage-note">
        Calculate your costs upfront using our brokerage calculator
      </p>

    </section>
  );
}

export default Brokerage;