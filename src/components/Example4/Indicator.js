import React, { useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";

const Indicator = ({ MT, AM, pathSize }) => {
  const x = useMotionValue(0);
  const color = useTransform(x, [0, 50, 100], ["rgb(3, 209, 0)", "rgb(68, 0, 255)", "rgb(211, 9, 225)"]);

  useEffect(() => {
    x.set(pathSize * 100);
  }, [pathSize, x]);
  return (
    <div className="ButtonWrappers">
      <motion.div className="AffluenceIndicator">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="425px"
          height="425px"
          viewBox="-6 44 300 200"
          enableBackground="new 0 0 200 200"
        >
          {/* <defs>
              <filter id="innershadow" x0="-50%" y0="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"></feGaussianBlur>
                <feOffset dy="2" dx="3"></feOffset>
                <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></feComposite>

                <feFlood flood-color="#FFFFF" flood-opacity="0.7"></feFlood>
                <feComposite in2="shadowDiff" operator="in"></feComposite>
                <feComposite in2="SourceGraphic" operator="over" result="firstfilter"></feComposite>

                <feGaussianBlur in="firstfilter" stdDeviation="3" result="blur2"></feGaussianBlur>
                <feOffset dy="-2" dx="-3"></feOffset>
                <feComposite in2="firstfilter" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></feComposite>

                <feFlood flood-color="#FFFFF" flood-opacity="0.7"></feFlood>
                <feComposite in2="shadowDiff" operator="in"></feComposite>
                <feComposite in2="firstfilter" operator="over"></feComposite>
              </filter>
            </defs> */}
          <motion.path
            className="path"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            stroke={color}
            strokeWidth="14"
            strokeMiterlimit="13"
            initial={{ pathLength: 0.2 }}
            // filter="url(#innershadow)"
            animate={{ pathLength: pathSize }}
            transition={{ duration: 0.4 }}
            d="M100.416,2.001C154.35,2.225,198,46.015,198,100
			c0,54.124-43.876,98-98,98S2,154.124,2,100S45.876,2,100,2"
          />
        </svg>
      </motion.div>
      <div className="ButtonBorders">
        <div className="CircleDiv">
          <div className={`MT ${MT && "active"}`}></div>
          <div className="Separator" />
          <div className={`AM ${AM && "active"}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Indicator;
