import React, { useState } from "react";

function CreateTicket() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      title: "Account Opening",
      icon: "fa fa-plus-circle",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },

    {
      title: "Your Zerodha Account",
      icon: "fa fa-user",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },

    {
      title: "Kite",
      icon: "fa fa-line-chart",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },

    {
      title: "Funds",
      icon: "fa fa-inr",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },

    {
      title: "Console",
      icon: "fa fa-desktop",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },

    {
      title: "Coin",
      icon: "fa fa-pie-chart",
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          {sections.map((section, index) => (
            <div className="mb-4" key={section.title}>
              {/* Header */}
              <div
                className="support-category-header d-flex align-items-center"
                onClick={() => toggleSection(index)}
              >
                <div className="support-category-icon">
                  <i className={section.icon}></i>
                </div>

                <div className="support-category-title">{section.title}</div>

                <div className="support-category-arrow">
                  <i
                    className={`fa ${
                      openSection === index
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                  ></i>
                </div>
              </div>

              {/* Links */}
              {openSection === index && (
                <div className="support-category-links">
                  <ul>
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
