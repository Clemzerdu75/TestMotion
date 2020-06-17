import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./example4.scss";

import Indicator from "./Indicator";
import TimeSlot from "./TimeSlot";

const userArrayM = ["AK", "CF", "LD", "CV", "BB", "AA", "VV"];
const userArrayA = ["", "", "", "", "", "", ""];

const Example4 = () => {
  const [AM, setAM] = useState(false);
  const [MT, setMT] = useState(false);
  const [expand, setExpand] = useState(false);
  const [pathSize, setPathSize] = useState(0);
  const [pathSelector, setPathSelector] = useState(0);

  useEffect(() => {
    const filteredM = userArrayM.filter((el) => el !== "");
    const filteredA = userArrayA.filter((el) => el !== "");

    const pathSizeM = (filteredM.length / userArrayM.length).toFixed(2);
    const pathSizeA = (filteredA.length / userArrayA.length).toFixed(2);
    const globalPathSize = ((parseFloat(pathSizeA) + parseFloat(pathSizeM)) / 2).toFixed(2);

    switch (pathSelector) {
      case 0:
        setPathSize(parseFloat(globalPathSize));
        break;
      case 1:
        setPathSize(parseFloat(pathSizeM));
        break;
      case 2:
        setPathSize(parseFloat(pathSizeA));
        break;
      default:
        setPathSize(parseFloat(globalPathSize));
    }
  }, [pathSelector]);

  return (
    <motion.div className="CardWrapper" layoutTransition>
      {/* Status indicator */}
      <Indicator MT={MT} AM={AM} pathSize={pathSize} />

      {/* Text */}
      <div className="TESTTEST">
        <h1>Mardi 10 juin 2020</h1>
        <div className="SimpleRow">
          <TimeSlot
            isMorning={true}
            AM={AM}
            MT={MT}
            setAM={setAM}
            setMT={setMT}
            userArray={userArrayM}
            expand={expand}
            setPathSelector={setPathSelector}
          />
          <TimeSlot
            isMorning={false}
            AM={AM}
            MT={MT}
            setAM={setAM}
            setMT={setMT}
            userArray={userArrayA}
            expand={expand}
            setPathSelector={setPathSelector}
          />
        </div>
      </div>
      <div className="ExpandButton" onClick={() => setExpand(!expand)}>
        <motion.img alt="arrow" src="arrow.svg" animate={{ rotate: expand ? 180 : 0 }} />
      </div>
    </motion.div>
  );
};

export default Example4;
