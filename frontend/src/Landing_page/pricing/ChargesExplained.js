import React from "react";

function ChargesExplained() {
  return (
    <section className="container charges-explained">

      <h2>Charges explained</h2>

      <h3>Securities/Commodities transaction tax</h3>
      <p>
        Tax by the government when transacting on the exchanges.
        Charged as above on both buy and sell sides when trading
        equity delivery. Charged only on selling side when trading
        intraday or on F&O.
      </p>

      <p>
        When trading at Zerodha, STT/CTT can be a lot more than
        the brokerage we charge. Important to keep a tab.
      </p>


      <h3>Transaction/Turnover Charges</h3>
      <p>
        Charged by exchanges (NSE, BSE, MCX) on the value of
        your transactions.
      </p>

      <p>
        BSE has revised transaction charges in various groups
        based on the applicable exchange rates.
      </p>


      <h3>Call & trade</h3>
      <p>
        Additional charges of ₹50 per order for orders placed
        through a dealer at Zerodha including auto square off orders.
      </p>


      <h3>Stamp charges</h3>
      <p>
        Stamp charges by the Government of India as per the Indian
        Stamp Act of 1899 for transacting in instruments on the
        stock exchanges and depositories.
      </p>


      <h3>NRI brokerage charges</h3>
      <p>
        For a non-PIS account, 0.5% or ₹50 per executed order
        for equity and F&O, whichever is lower.
      </p>

      <p>
        For a PIS account, 0.5% or ₹200 per executed order
        for equity, whichever is lower.
      </p>

      <p>
        ₹500 + GST as yearly account maintenance charges.
      </p>


      <h3>Account with debit balance</h3>
      <p>
        If the account is in debit balance, any order placed will
        be charged ₹40 per executed order instead of ₹20.
      </p>


      <h3>Margin Trading Facility (MTF)</h3>
      <p>
        MTF Interest: 0.04% per day (₹40 per lakh) on the
        funded amount.
      </p>

      <p>
        MTF Brokerage: 0.3% or ₹20 per executed order,
        whichever is lower.
      </p>

      <p>
        MTF pledge charge: ₹15 + GST per pledge and unpledge
        request per ISIN.
      </p>


      <h3>GST</h3>
      <p>
        Tax levied by the government on the services rendered.
        18% of (brokerage + SEBI charges + transaction charges).
      </p>


      <h3>SEBI Charges</h3>
      <p>
        Charged at ₹10 per crore + GST by Securities and Exchange
        Board of India for regulating the markets.
      </p>


      <h3>DP (Depository participant) charges</h3>
      <p>
        ₹15.34 per scrip is charged on the trading account ledger
        when stocks are sold, irrespective of quantity.
      </p>


      <h3>Pledging charges</h3>
      <p>
        ₹30 + GST per pledge request per ISIN.
      </p>


      <h3>AMC (Account maintenance charges)</h3>
      <p>
        Free for the first year on all new resident individual accounts.
      </p>

      <p>
        For BSDA demat account: Zero charges if the holding value
        is less than ₹4,00,000.
      </p>

      <p>
        For non-BSDA demat accounts: ₹300/year + 18% GST
        charged quarterly.
      </p>


      <h3>Corporate action order charges</h3>
      <p>
        ₹20 plus GST will be charged for OFS / buyback / takeover /
        delisting orders placed through Console.
      </p>


      <h3>Off-market transfer charges</h3>
      <p>₹25 per transaction.</p>


      <h3>Physical CMR request</h3>
      <p>
        First CMR request is free. ₹20 + ₹100 courier charge
        + 18% GST for subsequent requests.
      </p>


      <h3>Payment gateway charges</h3>
      <p>
        ₹9 + GST. Not levied on transfers done via UPI.
      </p>


      <h3>Delayed Payment Charges</h3>
      <p>
        Interest is levied at 18% a year or 0.05% per day
        on the debit balance in your trading account.
      </p>


      <h3>Trading using 3-in-1 account with block functionality</h3>

      <ul>
        <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
        <li>Intraday Brokerage: 0.05% per executed order.</li>
      </ul>


      <h3>Disclaimer</h3>

      <p>
        For Delivery based trades, a minimum of ₹0.01 will be
        charged per contract note. Clients who opt to receive
        physical contract notes will be charged ₹20 per contract
        note plus courier charges.
      </p>

      <p>
        Brokerage will not exceed the rates specified by SEBI
        and the exchanges. All statutory and regulatory charges
        will be levied at actuals.
      </p>

      <p>
        Free investments are available only for retail individual
        clients. Companies, Partnerships, Trusts, and HUFs need
        to pay applicable delivery brokerage.
      </p>

    </section>
  );
}

export default ChargesExplained;