import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setIndex }) => (
  <div className="Navbar22">
    <Link to="/Example11/Top" onClick={() => setIndex([1, 0])} style={{ color: "inherit", textDecoration: "inherit" }}>
      <p>Top</p>
    </Link>
    <Link to="/Example11/Left" onClick={() => setIndex([0, 1])} style={{ color: "inherit", textDecoration: "inherit" }}>
      <p>Left</p>
    </Link>
    <Link to="/Example11/" onClick={() => setIndex([1, 1])} style={{ color: "inherit", textDecoration: "inherit" }}>
      <p>Middle</p>
    </Link>
    <Link
      to="/Example11/Right"
      onClick={() => setIndex([2, 1])}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <p>Right</p>
    </Link>
    <Link
      to="/Example11/Bottom"
      onClick={() => setIndex([1, 2])}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <p>Bottom</p>
    </Link>
  </div>
);

export default Navbar;
