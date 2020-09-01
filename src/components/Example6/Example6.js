import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { wrapGrid } from "animate-css-grid";

import "./Example6.scss";

const items = ["", "", "", "", "", "", "", "", "", "", "", ""];

// const spring = {
//   type: "spring",
//   damping: 20,
//   stiffness: 300,
// };

const Card = ({ items }) => {
  const [expand, setExpand] = useState(false);

  return (
    <motion.li
      className={`Card ${expand ? "active" : ""}`}
      onClick={() => setExpand(!expand)}
      style={{ zIndex: expand ? "3" : "0" }}
    >
      {items}
    </motion.li>
  );
};

const Card2 = ({ items }) => {
  const [expand, setExpand] = useState(false);

  return (
    <motion.div
      positionTransition
      className={`Card2 ${expand ? "active" : ""}`}
      onClick={() => setExpand(!expand)}
      animate={{ width: expand ? "20vw" : "10vw", height: expand ? "20vw" : "10vw" }}
    >
      {items}
    </motion.div>
  );
};

const Card3 = ({ items, setToggle }) => {
  const [expand, setExpand] = useState(false);
  return (
    <motion.div
      positionTransition
      layoutTransition
      className={`Card3 ${expand ? "active" : ""}`}
      onClick={() => {
        setExpand(!expand);
        setToggle(!expand);
      }}
      style={{ width: expand ? "420px" : "200px", height: expand ? "420px" : "200px" }}
    >
      {items}
    </motion.div>
  );
};

const Card4 = ({ items }) => {
  const [expand, setExpand] = useState(false);

  return (
    <li
      className={`Card ${expand ? "active" : ""}`}
      onClick={() => setExpand(!expand)}
      style={{ zIndex: expand ? "3" : "0" }}
    >
      <div>{items}</div>
    </li>
  );
};

const Example6 = () => {
  const [toggle, setToggle] = useState(false);
  const renderGrid = () => {
    let blocks = document.getElementById("GridTest3").children;
    let padding = 20;
    const cols = 3;
    let newTop, newLeft;
    console.log(blocks);
    for (let i = 1; i < blocks.length; i++) {
      if (i % cols === 0) {
        newTop = blocks[i - cols].offsetTop + blocks[i - cols].offsetHeight + padding;
        blocks[i].style.top = newTop + "px";
      } else {
        if (blocks[i - cols]) {
          newTop = blocks[i - cols].offsetTop + blocks[i - cols].offsetHeight + padding;
          blocks[i].style.top = newTop + "px";
        }
        newLeft = blocks[i - 1].offsetLeft + blocks[i - 1].offsetHeight + padding;
        blocks[i].style.left = newLeft + "px";
      }
    }
  };

  useEffect(() => {
    renderGrid();
  }, [toggle]);

  useEffect(() => {
    const grid = document.getElementById("grid");
    wrapGrid(grid, { easing: "backOut", stagger: 10, duration: 400 });
  }, []);
  return (
    <>
      <h1 className="Main_Title">Interactive Grid Test</h1>

      <h2>Try 1</h2>
      <h3>(With display: grid)</h3>
      <div className="GridTest">
        {items.map((el, key) => (
          <Card items={key} />
        ))}
      </div>

      <h2>Try 2</h2>
      <h3>(With display: flex and framer)</h3>
      <ul className="GridTest2">
        {items.map((el, key) => (
          <Card2 items={key} />
        ))}
      </ul>
      <h2>Try 3</h2>
      <h3>(With javascript functions and framer)</h3>
      <ul id="GridTest3">
        {items.map((el, key) => (
          <Card3 setToggle={setToggle} items={key} />
        ))}
      </ul>
      <h2>Try 4</h2>
      <h3>(With display: grid and animated-grid)</h3>
      <div className="GridTest" id="grid">
        {items.map((el, key) => (
          <Card4 items={key} />
        ))}
      </div>
    </>
  );
};

export default Example6;
