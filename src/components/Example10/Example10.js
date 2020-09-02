import React, { useState } from "react";

import "./Example10.scss";

const options = ["coucou", "test", "hello", "hola"]; //array used for test, can be send by props

const Example10 = () => {
  const [choosenOne, setChoosenOne] = useState("");
  const [expand, setExpand] = useState(false);

  const handleChoice = (choice) => {
    setChoosenOne(choice);
    //send the result with the process you want
  };

  return (
    <div style={{ width: "fitcontent", position: "relative" }}>
      <div className="TopbarWrapper" onClick={() => setExpand(!expand)}>
        <input disabled value={choosenOne ? choosenOne : "Choisissez une option"} />
        <img alt="" src="chevron-up.svg" style={{ transform: expand ? "rotate(0)" : "rotate(180deg)" }} />
      </div>
      <div className={`OptionSelector ${expand ? "active" : null}`}>
        {options.map((el, index) => (
          <p className={`option ${choosenOne === el ? "choosen" : ""}`} onClick={() => handleChoice(el)} key={index}>
            {el}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Example10;
