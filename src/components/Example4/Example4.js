import React, { useState, useEffect } from "react";
import "./example4.scss"

const Example4 = () => {

  const [AM, setAM] = useState(false);
  const [MT, setMT] = useState(false);
    
    return (
      <div>
          <div className="ButtonWrapperrrs">
              <div className="ButtonBorderrrrs">
                <div className="CircleDiv">
                  <div
                    className="MT" 
                    onClick={() => setMT(!MT)}
                    style={{background: MT && "green"}}
                    ></div>
                  <div
                    className="Separator"  />
                  <div
                    className="AM"
                    onClick={() => setAM(!AM)}
                    style={{background: AM && "green"}}
                    ></div>
                </div>
              </div>
          </div>
      </div>
    )
}

export default Example4;