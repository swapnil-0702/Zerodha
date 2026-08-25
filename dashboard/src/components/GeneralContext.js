import React, { createContext, useState } from "react";

const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [showBuyWindow, setShowBuyWindow] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [orderType, setOrderType] = useState("BUY");

  const openBuyWindow = (stock) => {
    setSelectedStock(stock);
    setOrderType("BUY");
    setShowBuyWindow(true);
  };

  const openSellWindow = (stock) => {
    setSelectedStock(stock);
    setOrderType("SELL");
    setShowBuyWindow(true);
  };

  const closeBuyWindow = () => {
    setShowBuyWindow(false);
    setSelectedStock(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        showBuyWindow,
        selectedStock,
        orderType,
        openBuyWindow,
        openSellWindow,
        closeBuyWindow,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export { GeneralContext, GeneralContextProvider };