import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  imageClassName = "",
}) {
  return (
    <section className="container product-section">
      <div className="row align-items-center gy-5">
        <div className="col-12 col-lg-6">
          <img
            src={imageURL}
            alt={productName}
            className={`img-fluid product-section-image ${imageClassName}`}
          />
        </div>
        <div className="col-12 col-lg-5 product-section-copy">
          <h2 className="product-section-title">{productName}</h2>
          <p className="product-section-description">{productDescription}</p>
          <div className="product-section-links">
            <a href={tryDemo}>Try demo &rarr;</a>
            <a href={learnMore}>Learn more &rarr;</a>
          </div>
          <div className="product-store-links">
            <a href={googlePlay}>
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
              />
            </a>
            <a href={appStore}>
              <img
                src="/media/images/appstoreBadge (1).svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
