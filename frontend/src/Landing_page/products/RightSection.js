import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  imageClassName = "",
}) {
  return (
    <section className="container product-section product-section-right gx-3">
      <div className="row align-items-center gy-5">
        <div className="col-12 col-lg-5 product-section-copy">
          <h2 className="product-section-title">{productName}</h2>
          <p className="product-section-description">{productDescription}</p>
          <div className="product-section-links product-section-single-link">
            <a href={learnMore}>Learn more &rarr;</a>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <img
            src={imageURL}
            alt={productName}
            className={`img-fluid product-section-image ${imageClassName}`}
          />
        </div>
      </div>
    </section>
  );
}

export default RightSection;
