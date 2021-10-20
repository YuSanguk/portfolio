import React from "react";
import AppRouter from "./Router";
import { BrowserRouter as Router } from "react-router-dom";
import "../style/style.css";
import Navigator from "./Navigator";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dev-Who</title>
      </Helmet>
      <Router>
        <Navigator />
        <AppRouter />
        <Footer />
      </Router>
    </>
  );
};

export default App;
