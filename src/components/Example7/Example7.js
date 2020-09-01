import React, { useState, useEffect } from "react";
import { wrapGrid } from "animate-css-grid";

import "./Example7.scss";

const Card = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`card ${expanded ? "card--expanded" : ""}`}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      {expanded ? <div>Coucou</div> : <div>Hello</div>}
    </div>
  );
};

const Grid = () => {
  useEffect(() => {
    const grid = document.querySelector(".grid");
    wrapGrid(grid, { easing: "circOut", stagger: 0, duration: 400 });
  }, []);

  return (
    <div className="grid">
      {[...Array(5).keys()].map((i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

const Example7 = () => (
  <>
    <h1 className="Main_Title">Interactive Grid Test 2</h1>
    <div className="p-4">
      <Grid />
    </div>
  </>
);

export default Example7;
