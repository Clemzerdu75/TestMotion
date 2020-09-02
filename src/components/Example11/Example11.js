import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";

import Navbar from "./Navbar";

import "./Example11.scss";

const Example11 = () => {
  const [index, setIndex] = useState([1, 1]);
  let location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path.includes("Top")) setIndex([1, 0]);
    else if (path.includes("Left")) setIndex([0, 1]);
    else if (path.includes("Right")) setIndex([2, 1]);
    else if (path.includes("Bottom")) setIndex([1, 2]);
    else setIndex([1, 1]);
  }, [location.pathname]);

  useEffect(() => {
    const wrapper = document.getElementById("Wrapper22");

    if (wrapper) wrapper.style.transform = `translate(-${index[0] * 100}vw, -${index[1] * 100}vh)`;
    setTimeout(() => {
      wrapper.style.transition = ".4s ease-in-out";
    }, 400);
  }, [index]);

  return (
    <div className="MainBody2">
      <Navbar setIndex={setIndex} />
      <div id="Wrapper22" className="Wrapper22">
        <div className="Page Top">
          <h1>Top Page</h1>
        </div>
        <div className="Page Left">
          <h1>Left Page</h1>
        </div>
        <div className="Page Middle">
          <h1>Middle Page</h1>
        </div>
        <div className="Page Right">
          <h1>Right Page</h1>
        </div>
        <div className=" Page Bottom">
          <h1>Bottom Page</h1>
        </div>
        <Router>
          <Switch>
            <Route path="/Example11/" exact />
            <Route path="/Example11/Top" />
            <Route path="/Example11/Left" />
            <Route path="/Example11/Right" />
            <Route path="/Example11/Bottom" />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Example11;
