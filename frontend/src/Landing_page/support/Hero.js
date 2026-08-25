import React from "react";

function Hero() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        {/* Heading + Button */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="mb-0 fs-2 fw-medium" style={{ opacity: "0.85" }}>
            Support Portal
          </h1>

          <button className="btn btn-primary px-4 py-2 fs-5">My tickets</button>
        </div>

        {/* Search Box */}
        <div className="input-group bg-white border rounded">
          <span className="input-group-text bg-white border-0 fs-4 py-3">
            <i className="fa fa-search"></i>
          </span>

          <input
            type="text"
            className="form-control border-0 fs-6 py-3 text-muted"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
