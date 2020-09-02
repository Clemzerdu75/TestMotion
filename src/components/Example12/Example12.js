import React, { useEffect, useState, useRef } from "react";

import "./Example12.scss";

const Example12 = () => {
  const page1 = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);

  const [index, setIndex] = useState(0);

  useEffect(() => {

    page1.current.className = "Page";
    page2.current.className = "Page secondary";
    page3.current.className = "Page tertiary";
    if (index === 0) {

      page1.current.className += " Unactive"
      page2.current.className += " Leaving";
      setTimeout(() => {
        page2.current.className += " Unactive";
      }, 400)
      setTimeout(() => {
        page2.current.style.display = "none";
        page1.current.style.display = "flex";

      }, 500)
      setTimeout(() => {
        page1.current.className = "Page Comming";
      }, 600)
    } else if (index === 1) {
      page2.current.className += " Unactive"
      page1.current.className += " Leaving";
      setTimeout(() => {
        page1.current.className += " Unactive";
      }, 400)
      setTimeout(() => {
        page2.current.style.display = "flex";
        page1.current.style.display = "none";
      }, 500)
      setTimeout(() => {
        page2.current.className = "Page secondary Comming";
      }, 600)

    }
    else {
      page1.current.className += " Leaving";
      page2.current.className += " Leaving";
      setTimeout(() => {
        page2.current.style.display = "none";
        page1.current.style.display = "none"
        page3.current.className += " Coming"
      }, 400)
    }
  }, [index])

  return (
    <div className="MainBody3">
      {index !== 2 && <img className="logo_fun" alt="hello" src="logo.png"></img>}

      <div className="ChoosePage">
        <p onClick={() => setIndex(0)}>Page 1</p>
        <p onClick={() => setIndex(1)}>Page 2</p>
        <p onClick={() => setIndex(2)}>Page 3</p>
      </div>
      <h1>{index === 0 ? "Planning" : index === 1 ? "Convocation" : "Nouveau document"}</h1>
      <div className="PageWrapper">
        <div ref={page1} class="Page">
          <div className="LeftPart">
            <div className="Section First"></div>
            <div className="Section Second"></div>
          </div>
          <div className="Content"></div>
        </div>

        <div ref={page2} class="Page secondary">
          <div className="LeftPart">
            <div className="Section Third"></div>
            <div className="Section Fourth"></div>
            <div className="Section Fifth"></div>
          </div>
          <div className="Content"></div>
        </div>
        <div ref={page3} class="Page tertiary">
          <div className="Content"></div>
        </div>
      </div>
    </div>
  );
};

export default Example12;
