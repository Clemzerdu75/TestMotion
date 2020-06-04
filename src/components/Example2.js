import React, { useState, useEffect } from "react";

const testarr = [{name: "coucou", value: "3333"}, {name: "Hola", value: "5555"},{name: "coucou", value: "3333"}, {name: "Hola", value: "5555"}, {name: "coucou", value: "3333"}, {name: "Hola", value: "5555"}, {name: "coucou", value: "3333"}, {name: "Hola", value: "5555"}, {name: "coucou", value: "3333"}, {name: "Hola", value: "5555"}];

const Example2 = () => {
    const [inputValues, setInputValues] = useState({})


    useEffect(() => {
        document.addEventListener('inputChange', handleInput);
        document.addEventListener('bloublou', handleInput);
        return () => {
          document.removeEventListener('inputChange', handleInput);
          document.removeEventListener('bloublou', handleInput);
        }
    }, []);

    const handleInput = (event) => {
        console.log("holala")
        if(event) {
            const {name, value} = event.detail;

            setInputValues(prevState => ({
                ...prevState,
                [name]: value 
            }))
        }
    }
    return (
        <div>
            <my-component first="Clément" ></my-component>
            <moben-button></moben-button>
            <div className="InputWrapper">
                <div>
                    <moben-field name="name" placeholder="Name"></moben-field>
                    <moben-field name="lastName" placeholder="Last Name"></moben-field>
                </div>
                <div>
                    <moben-field name="phoneNumber" placeholder="Phone Number" type="number"></moben-field>
                    <moben-field name="password" placeholder="Password" type="password"></moben-field>
                </div>
            </div>
            <div style={{marginLeft: "30px"}}>
                <h2>{inputValues.name ? `name: ${inputValues.name}` : null}</h2>
                <h3>{inputValues.lastName ? `Lastname: ${inputValues.lastName}` : null}</h3>
                <h2>{inputValues.phoneNumber ? `Phone Number: ${inputValues.phoneNumber}` : null}</h2>
                <h3>{inputValues.password ? `Password: ${inputValues.password}` : null}</h3>
            </div>
            <moben-list name={JSON.stringify(testarr)}></moben-list>
        </div>
    )
}

export default Example2;