import React from "react";
import { motion } from "framer-motion";

import UserMarker from "./UserMarker";
import EmptySeats from "./EmptySeats";

const TimeSlot = ({ isMorning, AM, MT, setAM, setMT, userArray, expand, setPathSelector }) => {
  const handlePath = (state) => {
    if (state) {
      if (isMorning) setPathSelector(1);
      else setPathSelector(2);
    } else setPathSelector(0);
  };
  return (
    <div className="TimeWrapper" onMouseEnter={() => handlePath(true)} onMouseLeave={() => handlePath(false)}>
      <div className="header">
        <h2>{isMorning ? "Matinée" : "Après-Midi"}</h2>
        <motion.div
          className="AddButtonWrapper"
          whileHover={{ scale: 1.1 }}
          onClick={isMorning ? () => setMT(!MT) : () => setAM(!AM)}
        >
          <motion.img alt="add" src="plus.svg" whileHover={{ rotate: 90 }} />
        </motion.div>
      </div>
      <div className="UserList" style={{ marginLeft: "-15px" }}>
        {userArray.map((el, key) => {
          if (!expand) {
            if (key < 3 && el.length) return <UserMarker name={el} classes="UserMarker" key={key} />;
            else if (key === 3 && el.length)
              return (
                <div
                  key={key}
                  className="UserMarker"
                  style={{ background: "none", boxShadow: "none", border: "solid 2px #7783a1", transform: "scale(.8)" }}
                >
                  {" "}
                  <p style={{ color: "#7783a1", fontSize: "1.3em" }}>{`+ ${userArray.length - 3}`}</p>{" "}
                </div>
              );
            else return null;
          } else {
            if (el.length) return <UserMarker name={el} classes="UserMarker expand" key={key} />;
            else return <EmptySeats key={key} />;
          }
        })}
      </div>
    </div>
  );
};

export default TimeSlot;
