import React from "react";

const Apps = () => {
  return (
    <div className="page-container">

      <h1>Apps</h1>

      <div className="apps-grid">

        <div className="app-card">
          <h2>Console</h2>
          <p>
            Reports, analytics and portfolio insights.
          </p>
          <button>Open</button>
        </div>

        <div className="app-card">
          <h2>Kite</h2>
          <p>
            Trading platform for stocks and derivatives.
          </p>
          <button>Open</button>
        </div>

        <div className="app-card">
          <h2>Coin</h2>
          <p>
            Invest in direct mutual funds.
          </p>
          <button>Open</button>
        </div>

      </div>

    </div>
  );
};

export default Apps;