import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Toggle from "./Toggle"
import DeleteAction from "./Example1/DeleteAction"
import ToggleSimple from "./ToggleSimple"

const Example = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isToggle, setIsToggle] = useState(false);
    const [expand, setExpand] = useState(false);
    const [inputValues, setInputValues] = useState({})

    let color = "";
    if(isToggle) {
        color= "rgba(0,0,0, .8)";
        document.querySelector("body").style.backgroundColor = color;
    }  
    else {
        color= "rgba(255,255,255, .4)";
        document.querySelector("body").style.backgroundColor = color;
    }

    useEffect(() => {
        document.addEventListener('inputChange', handleInput)
        return () => {
          document.removeEventListener('bloublou', handleInput)
        }
    }, [])

    const handleInput = (event) => {
        if(event) {
            const {name, value} = event.detail;

            setInputValues(prevState => ({
                ...prevState,
                [name]: value 
            }))
        }
        console.log(inputValues)
       
    }
    return (
        <div>

            <motion.div onClick={() => setIsOpen(!isOpen) }className="Test1" animate={{ rotate: isOpen ?  180 : 0, backgroundColor: isOpen? "rgb(108, 208, 255)" : "violet" }} transition= {{ duration: .4 }} >
            </motion.div>


            <motion.div style={{ position: "absolute", width: "200px", height: "200px", border: "solid 3px red"}}
            drag
            dragConstraints={{ left: 0, right: "calc(100% - 100px)", top: 0, bottom: "calc(100% - 100px)" }}
            dragMomentum={false}
            // dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            onDragStart={ () => {
                document.querySelector("body").style.backgroundColor = "lightgrey";
            }}
            onDragEnd={ () => {
                document.querySelector("body").style.backgroundColor = color;
            }}
            ></motion.div>



            <motion.div
            onMouseEnter={() => setExpand(!expand) }
            onMouseLeave={() => setExpand(!expand) }
            style={{position: "relative", margin: "20px", marginTop: "120px", borderRadius: "30px", backgroundColor: "#0735dd", overflow: "hidden"}}
            animate={{width: expand ? "500px" : "150px", height: expand ? "300px" : "150px" }}
            transition={{duration: .4}}
            >
                <div className="PP" ></div>
                <div className="LeftText" style={{opacity: expand ? "1" : "0", transition: expand ? ".4s ease-in" : ".1s ease-in"}} >
                    <h1>This a test</h1>
                    <p>lorem ipsum blablzkj,n gd gdf</p>
                    <p>blabla blaff gkd df hthththt</p>
                    <p>RTYU hjdjhdf fjhdf.</p>
                </div>
                <div className="BottomText" style={{opacity: expand ? "1" : "0", transition: expand ? ".4s ease-in" : ".2s ease-in"}}>
                    <p>- hsjhf fs fssfsf ffffjhj</p>
                    <p>- hsjhf fs fssffjhj</p>
                    <p>- hsjhf fs sfeefff ffffjhjf</p>
                    <p>- hsjhf fs fssfsf ffffjhj</p>
                    <p>- hsjhf fs fssffjhj</p>
                    <p>- hsjhf fs sfeefff ffffjhjf</p>
                </div>
                <div className="ListofToggle" style={{opacity: expand ? "1" : "0", transition: expand ? ".4s ease-in" : ".1s ease-in"}}>
                    <ToggleSimple />
                    <ToggleSimple />
                    <ToggleSimple />
                    <ToggleSimple />
                </div>
            </motion.div>


            <div className="Wrapper">
                <Toggle isToggle={isToggle} setIsToggle={setIsToggle}/>
            </div>


            <DeleteAction />
            <my-component first="Clément" ></my-component>
            <moben-button  onBloublou={handleInput()}></moben-button>
            <moben-input name="lastName" placeholder="Last Name"></moben-input>
            <moben-input name="name" placeholder="Name"></moben-input>
            <moben-input name="phoneNumber" placeholder="Phone Number" type="number"></moben-input>
        </div>
    )
}

export default Example;