import React from "react";

const Funds = () => {
  return (
    <div className="page-container">

      <h1>Funds</h1>

      <div className="fund-card">

        <div>
          <p>Equity</p>
          <h1>₹3,740.00</h1>
        </div>

        <div>
          <p>Available margin</p>
          <h2>₹3,740.00</h2>
        </div>

      </div>

      <div className="fund-actions">

        <button>Add Funds</button>

        <button className="secondary">
          Withdraw
        </button>

      </div>

    </div>
  );
};

export default Funds;