import React from "react";

const feature = {
  logo: "media/images/logo-l.svg",
  banner: "media/images/kc-banner-image.svg",
  title: "Kite Connect",
  description:
    "Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more.",
  linkText: "Explore",
  linkHref: "#",
};

function FeatureSection() {
  return (
    <section className="feature-section mb-5">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-3 col-md-4 text-center text-md-start">
            <img
              src={feature.logo}
              alt={feature.title}
              className="feature-section-logo"
            />
          </div>

          <div className="col-lg-6 col-md-8">
            <p className="feature-section-text">
              {feature.description}
              <a href={feature.linkHref} className="feature-section-link">
                {feature.linkText}{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </p>
          </div>

          <div className="col-lg-3 text-center text-lg-end">
            <img
              src={feature.banner}
              alt={`${feature.title} banner`}
              className="feature-section-banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
