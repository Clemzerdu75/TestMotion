import React, { useEffect, useState } from "react";
import { wrapGrid } from "animate-css-grid";

import "./Example14.scss";

const Card = ({ idx: index, expanded, handleExpand }) => (
  <div
    className={`card ${expanded === index ? "card--expanded" : expanded === -1 ? "" : "card--mini"}`}
    onClick={() => {
      handleExpand(expanded === index ? -1 : index)
    }}
  >
    {expanded === index ? <p style={{ fontSize: "2rem" }}>Hello</p> : <p style={{ fontSize: expanded === -1 ? "1.2rem" : ".5rem" }}>{`Coucou ${index + 1}`}</p>}
  </div >
)

const Grid = () => {
  const [expanded, setExpand] = useState(-1);

  useEffect(() => {
    const grid = document.querySelector(".grid");
    wrapGrid(grid, { easing: "circOut", stagger: 0, duration: 400 });
  }, []);

  const handleExpand = (index) => {
    setExpand(index);
  }

  return (
    <>
      <div className="ClickableArea Left" onClick={() => {
        handleExpand(expanded > 0 ? expanded - 1 : 5);
      }}></div>
      <div className="ClickableArea Right" onClick={() => {
        handleExpand(expanded < 5 ? expanded + 1 : 0);
      }}></div>
      <div className="grid">
        {[...Array(5).keys()].map((i) => (
          <Card key={i} idx={i} expanded={expanded} handleExpand={handleExpand} />
        ))}
      </div>
    </>
  );
};


const Example14 = () => (
  <div className="MobileGridWrapper">

    <div className="MobileGrid">

      <Grid />
    </div>
  </div>
);

export default Example14;
