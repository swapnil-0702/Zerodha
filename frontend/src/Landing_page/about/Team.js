import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-3 text-center mb-5">People</h1>
        <div className="col-6 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "40%" }}
          />
          <p className="fs-5 mt-3">Nithin Kamath</p>
          <p className="fs-6 text-muted">Founder, CEO</p>
        </div>

        <div className="col-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /
            <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
