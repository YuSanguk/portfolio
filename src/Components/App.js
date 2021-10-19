import React from "react";
import AppRouter from "./Router";
import { BrowserRouter as Router } from "react-router-dom";
import "../style/style.css";
import Navigator from "./Navigator";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Router>
        <Navigator />
        <AppRouter />
        <Footer />
      </Router>
    </>
  );
};

export default App;
