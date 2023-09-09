import { useState, useContext } from "react";
import InputTextContext from "./InputTextContext";

const InputTextState = (props) => {
    
    const [inputText, setInputText] = useState("");

    return (
        <InputTextContext.Provider value={{inputText, setInputText}}>
            {props.children}
        </InputTextContext.Provider>
    )
}

export default InputTextState;