
import React, { useState } from "react";
import { motion } from "framer-motion";

const ToggleSimple = () => {
    const [isToggle, setIsToggle] = useState(false);
    return (
        <div className="ToggleWrapper" style={{background: isToggle ? "white" :"rgb(230, 222, 238)", boxShadow: isToggle && "none"}}>
            <motion.div className="Toggle"
            onClick={() => setIsToggle(!isToggle)}
            animate={{x: isToggle ? "calc(100% - 12.5px)" : 0, background: isToggle ? "rgba(158, 250, 146, 0.8)" : "rgba(255,255, 255, .9)", boxShadow: isToggle && "none"}}
            ></motion.div>
        </div>
    )
}

export default ToggleSimple;