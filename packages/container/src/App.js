import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "ca",
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </StylesProvider>
  );
};
