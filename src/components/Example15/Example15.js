import React, { useEffect, useState } from "react";
import ChatBotWrapper from "./ChatBotWrapper";

import "./Example15.scss";

const Example15 = () => {
  const [stepsData, setStepsData] = useState({
    name: "",
    lastname: "",
    etabs: [],
    offices: [],
    users: [],
  });

  useEffect(() => {
    console.log(stepsData)
  }, [stepsData])


  const handleEnd = () => {
    console.log(stepsData)
  }

  const handleName = (props) => {
    setStepsData(prevState => ({
      ...prevState,
      name: props.steps.name.value,
      lastname: props.steps.lastname.value,
    }))
    return ('3')
  }

  const handleOffices = ({ steps }) => {

    setStepsData(prevState => ({
      ...prevState,
      etabs: prevState.etabs.indexOf(steps.etab.value) <= -1 ? prevState.etabs.concat(steps.etab.value) : prevState.etabs.length ? prevState.etabs : steps.etab.value,
      offices: prevState.offices.concat({
        etab: steps.etab.value,
        name: steps.office.value,
        size: steps.seats.value
      })
    }))
    return ('end of etab');
  }

  const handleUser = (userList) => {
    setStepsData(prevState => ({
      ...prevState,
      users: prevState.users.concat(userList)
    }));
    return ('end of user')
  }

  return (
    <div className="ChatBotWrapper">
      <button></button>
      <ChatBotWrapper
        handleNameP={handleName}
        handleOfficesP={handleOffices}
        handleUserP={handleUser}
        handleEnd={handleEnd} />
    </div>
  )
}








export default Example15;

