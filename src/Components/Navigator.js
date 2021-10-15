import React from "react";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/awards">Award</Link>
      </li>
      <li>
        <Link to="/contacts">Contact</Link>
      </li>
      <li>
        <Link to="/portfolio">portfolio</Link>
      </li>
      <li>
        <Link to="/skill">skill</Link>
      </li>
    </ul>
  );
};

export default Navigator;
