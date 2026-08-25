import React from "react";
import CreateTicket from "./CreateTicket";
import Hero from "./Hero";
import News from "./news";
import QuickLinks from "./QuickLinks";

function SupportPage() {
  return (
    <>
      <Hero />

      <div className="container">
        <div className="row">

          {/* Left side */}
          <div className="col-lg-8">
            <CreateTicket />
          </div>

          {/* Right side */}
          <div className="col-lg-4">
            <News />
            <QuickLinks />
          </div>

        </div>
      </div>
    </>
  );
}

export default SupportPage;