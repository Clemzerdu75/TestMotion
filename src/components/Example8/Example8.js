import React, { useState } from "react";
import "./Example8.scss";

const Example8 = () => {
  const [settings, setSettings] = useState(false);
  const [convoc, setConvoc] = useState(false);

  return (
    <div className="MainBody">
      {/* Wrapper */}
      <div
        className="MainWrapper"
        style={{
          transform: settings || convoc ? (convoc ? "translate(-50%, -50%)" : "translateY(0)") : "translateY(-50%)",
        }}
      >
        {/* Settings */}

        <div className="MainSettings">
          <div className="SettingsWrapper" onClick={() => setSettings(false)}>
            <h2>Nouveau Document</h2>
          </div>
        </div>
        {/* Main Page */}

        <div className="MainPage">
          <button className="NewConvoc" onClick={() => setSettings(true)}></button>
          <button className="ConvocPageButton" onClick={() => setConvoc(true)}></button>
        </div>
        <div className="ConvocPage" onClick={() => setConvoc(false)}></div>
      </div>
    </div>
  );
};

export default Example8;
