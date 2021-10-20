import React, { useState } from "react";
import AppRouter from "./Router";
import { BrowserRouter as Router } from "react-router-dom";
import "../style/style.css";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dev-Who</title>
      </Helmet>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
};

export default App;
