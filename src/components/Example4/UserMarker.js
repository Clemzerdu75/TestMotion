import React from "react";

const UserMarker = ({ name, classes }) => {
  return (
    <div className={classes}>
      <div className="UserWrapper">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default UserMarker;
