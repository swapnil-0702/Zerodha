import React from "react";

const Summary = () => {
  return (
    <div className="summary">
      <div className="greeting">
        <h1>Hi, User!</h1>
      </div>

      <hr />

      <div className="section">
        <h2>Equity</h2>

        <div className="equity-row">
          <div className="equity-main">
            <h1>3.74k</h1>
            <p>Margin available</p>
          </div>

          <div className="equity-details">
            <div>
              <span>Margins used</span>
              <b>0</b>
            </div>

            <div>
              <span>Opening balance</span>
              <b>3.74k</b>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="section">
        <h2>Holdings (13)</h2>

        <div className="holdings-summary">
          <div>
            <h1 className="profit-value">1.55k</h1>

            <p className="profit-text">+5.20%</p>
          </div>

          <div className="holding-details">
            <div>
              <span>Current Value</span>
              <b>31.43k</b>
            </div>

            <div>
              <span>Investment</span>
              <b>29.88k</b>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="section">
        <h2>Positions (2)</h2>

        <div className="position-summary">
          <div>
            <h1>₹420.50</h1>
            <p>Net P&amp;L</p>
          </div>

          <div>
            <span>Day P&amp;L</span>
            <b className="profit">+₹120.30</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
