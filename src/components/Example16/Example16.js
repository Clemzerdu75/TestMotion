import React, { useState, useRef, useEffect } from "react";
import lottie from "lottie-web"
import animation from "./Testdata.json"

import "./Example16.scss";


const Example16 = () => {
  const container = useRef(null);

  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      lopp: true,
      autoplay: true,
      animationData: animation,
    })
  }, [])
  return (
    <>
      <div ref={container}></div>
      {/* <Lottie
        options={{ animationData: animation }}
        speed={.2}
        animationControl={{
          'Square,Transform, Rotation': [10],
        }}
      /> */}
    </>

  )
}

export default Example16;
