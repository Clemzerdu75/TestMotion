import React, { useState } from "react";
import { motion /*Variants*/ } from "framer-motion";

const variants = {
  open: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
};

const testarr = [
  { name: "coucou", value: "3333" },
  { name: "Hola", value: "5555" },
  { name: "coucou", value: "3333" },
  { name: "Hola", value: "5555" },
  { name: "coucou", value: "3333" },
  { name: "Hola", value: "5555" },
  { name: "coucou", value: "3333" },
  { name: "Hola", value: "5555" },
  { name: "coucou", value: "3333" },
  { name: "Hola", value: "5555" },
];

const Example3 = () => {
  const [showList, setShowlist] = useState(false);
  return (
    <div>
      <h1 class="Main_Title">WC Animation</h1>
      <motion.div
        whileHover={{ rotate: 180 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "11vw",
          margin: " 0 auto",
          marginTop: " 50px",
        }}
      >
        <moben-button onClick={() => setShowlist(!showList)}></moben-button>
      </motion.div>
      {showList && (
        <motion.div className="anim_list" variants={variants}>
          {testarr.map((el) => (
            <motion.div className="testAnim"></motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Example3;
