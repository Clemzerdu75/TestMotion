import React, { useEffect, useState, useRef } from "react";

import "./Example13.scss";

const Example13 = () => {
  const calendar = useRef(null);
  const tab = useRef(null);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index) {
      tab.current.className += " Switch";
      setTimeout(() => {
        calendar.current.className += " Switch2";
      }, 400)
      setTimeout(() => {
        tab.current.className = "Container Active";
        calendar.current.className = "Container Inactive";
      }, 1000)
    } else {
      calendar.current.className += " Switch";
      setTimeout(() => {
        tab.current.className += " Switch2";
      }, 400)
      setTimeout(() => {
        calendar.current.className = "Container Active";
        tab.current.className = "Container Inactive";
      }, 1000)
    }

  }, [index])

  return (
    <div className="MainBody4">
      <img className="logo_fun" alt="hello" src="logo.png"></img>
      <div class="ChoosePage">
        <p onClick={() => setIndex(0)}>Page 1</p>
        <p onClick={() => setIndex(1)}>Page 2</p>
      </div>
      <h1>{index ? "Convocations" : "Planning"}</h1>
      <div className="PageWrapper " >
        <div className={`LeftPart ${index ? 'secondary' : null}`}>
          <div className="Section First"></div>
          <div className="Section Second"></div>
          <div className="Section Third"></div>
        </div>
        <div className="Content">
          <div className="Container" ref={calendar}>
            <h1>Calendar</h1>
          </div>
          <div className="Container" ref={tab}>
            <h1>Table</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example13;
