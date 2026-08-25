import React from "react";
import { Routes, Route } from "react-router-dom";

import WatchList from "./Watchlist";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";

import BuyActionWindow from "./BuyActionWindow";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <GeneralContextProvider>

      <div className="dashboard-container">

        <WatchList />

        <BuyActionWindow />

        <div className="content">
          <Routes>
            <Route path="/" element={<Summary />} />

            <Route path="/orders" element={<Orders />} />

            <Route path="/holdings" element={<Holdings />} />

            <Route path="/positions" element={<Positions />} />

            <Route path="/funds" element={<Funds />} />

            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>

      </div>

    </GeneralContextProvider>
  );
};

export default Dashboard;