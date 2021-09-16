import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";

const MarketingLazyApp = lazy(() => import("./components/MarketingApp"));
const AuthLazyApp = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "ca",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path="/auth">
              <AuthLazyApp onSignUp={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingLazyApp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};
