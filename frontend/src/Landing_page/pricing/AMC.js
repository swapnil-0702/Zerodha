import React from "react";

function AMC() {
  return (
    <section className="container pricing-detail-section">

      <h2>Demat AMC (Annual Maintenance Charge)</h2>

      <div className="pricing-info-box">
        Free for first year*
      </div>

      <p>From second year onwards, for BSDA accounts:</p>

      <table className="table pricing-table">
        <thead>
          <tr>
            <th>Value of holdings</th>
            <th>AMC</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Up to ₹4 lakh</td>
            <td>
              <span className="free-badge">FREE</span>
            </td>
          </tr>

          <tr>
            <td>₹4 lakh – ₹10 lakh</td>
            <td>₹100 per year + 18% GST, charged quarterly</td>
          </tr>

          <tr>
            <td>Above ₹10 lakh</td>
            <td>₹300 per year + 18% GST, charged quarterly</td>
          </tr>
        </tbody>
      </table>

      <p>
        For a non-BSDA account, AMC is ₹300 per year + 18% GST,
        regardless of holdings value, charged quarterly.
      </p>

      <p>
        To learn more about BSDA, <a href="#">click here</a>.
        To learn more about AMC, <a href="#">click here</a>.
      </p>

      <p>*Resident individual accounts only.</p>

    </section>
  );
}

export default AMC;