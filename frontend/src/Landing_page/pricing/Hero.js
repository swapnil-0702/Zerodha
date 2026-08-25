import React from "react";

function Hero() {
  return (
    <div className="container pricing-hero text-center pt-5 mt-5 ">
      <h1 className="fs-3" style={{opacity:0.85}}>Charges</h1>

      <p style={{opacity:0.5 , fontSize:"22px" }}>List of all charges and taxes</p>

      <div className="container py-5">
        <div className="row text-center">
          <div className="col-lg-4">
            <img
              src="/media/images/pricingEquity.svg"
              alt=""
              className="pricing-image"
            />

            <h2 className="text-muted">Free equity delivery</h2>

            <p className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>

          <div className="col-lg-4">
            <img
              src="/media/images/other-trades.svg"
              alt=""
              className="pricing-image"
            />

            <h2 className="text-muted">Intraday and F&O trades</h2>

            <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>

          <div className="col-lg-4">
            <img
              src="/media/images/pricing-eq (1).svg"
              alt=""
              className="pricing-image"
            />

            <h2 className="text-muted">Free direct MF</h2>

            <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
