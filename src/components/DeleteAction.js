import React, { useState } from "react";
import { motion } from "framer-motion";

const DeleteAction = () => {
    const [isDeleted, setIsDeleted] = useState(false)

    const handleDelete = (event, infos) => {
        setIsDeleted(infos.point.x >= 80 ? true : false)
    }
    return(
        <div className="DeleteWrapper">
            <div className="DeleteField" onClick={() => document.getElementById("explanation").style.opacity = "1"}>
                <motion.div
                    className="DeleteButton"
                    animate={{x: isDeleted ? 90 : 5}}
                    drag="x"
                    dragConstraints={{left: 0, right: isDeleted ? 90 : 0}}
                    onDrag={(event, infos) => handleDelete(event, infos)}
                ></motion.div>
            </div> 

            <p id="explanation">You need to drag to confirm.</p>

        </div>
    )
}

export default DeleteAction;