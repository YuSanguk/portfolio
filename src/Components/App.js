import React from "react";
import AppRouter from "./Router";
import "../style/style.css";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dev-Who</title>
      </Helmet>
      <AppRouter />
    </>
  );
};

export default App;
