import React from "react";

function Universe() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center gx-2 px-5 text-center">
        <h1>The Zerodha Universe</h1>
        <p className="pb-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "40%" }}
            className="mt-5"
          />
          <p
            className="mt-4 fw-medium"
            style={{ fontSize: "13px", opacity: "0.5" }}
          >
            Our asset management venture
            <br /> that is creating simple and transparent index
            <br /> funds to help you save for your goals.
          </p>

          <img
            src="media/images/streakLogo.png"
            style={{ width: "40%", marginTop: "80px" }}
          />
          <p
            className="mt-3 fw-medium"
            style={{ fontSize: "13px", opacity: "0.5" }}
          >
            Systematic trading platform <br /> that allows you to create and
            backtest <br />
            strategies without coding.
          </p>
        </div>

        <div className="col-4">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "40%" }}
            className="mt-5"
          />
          <p
            className="mt-4 fw-medium"
            style={{ fontSize: "13px", opacity: "0.5" }}
          >
            Options trading platform that lets you
            <br /> create strategies, analyze positions, and examine
            <br /> data points like open interest, FII/DII, and more.
          </p>

          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "40%", marginTop: "100px" }}
          />
          <p
            className="mt-4 fw-medium"
            style={{ fontSize: "13px", opacity: "0.5" }}
          >
            Thematic investing platform <br /> that helps you invest in
            diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-4">
          <img
            src="media/images/tijori.svg"
            style={{ width: "35%" }}
            className="mt-5"
          />
          <p
            className="mt-2 fw-medium"
            style={{ fontSize: "13px", opacity: "0.5" }}
          >
            Investment research platform
            <br /> that offers detailed insights on stocks,
            <br /> sectors, supply chains, and more.
          </p>

          <img
            src="media/images/dittoLogo.png"
            style={{ width: "30%", marginTop: "78px" }}
          />
          <p
            className="mt-4 fw-medium"
            style={{ fontSize: "13px", opacity: "0.5" }}
          >
            Personalized advice on life <br /> 
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%" , marginTop:"50px"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
