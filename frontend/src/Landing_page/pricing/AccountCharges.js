import React from "react";

function AccountCharges() {
  return (
    <section className="container pricing-detail-section">

      <h2>Charges for account opening</h2>

      <table className="table pricing-table">
        <thead>
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Individual account</td>
            <td><span className="free-badge">FREE</span></td>
          </tr>

          <tr>
            <td>Minor account</td>
            <td><span className="free-badge">FREE</span></td>
          </tr>

          <tr>
            <td>NRI account</td>
            <td>₹ 500</td>
          </tr>

          <tr>
            <td>HUF account</td>
            <td>
              <span className="free-badge">FREE</span> (online) / ₹ 500 (offline)
            </td>
          </tr>

          <tr>
            <td>Partnership, LLP, and Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>

    </section>
  );
}

export default AccountCharges;