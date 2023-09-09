import { useEffect, useState, useContext } from "react";
import InputTextContext from "../context/InputTextContext";
const SearchBar = () => {
    
    const {inputText, setInputText} = useContext(InputTextContext);
    
    const detectChange = (e) => {
        setInputText(e.target.value);
    }

    return (
        <div className="searchbar-container">
            <input 
                className="searchbar" 
                type="text" 
                id="searchbar"
                value={inputText} 
                placeholder="Search here...." onChange={detectChange}/>
        </div>
    )
}

export default SearchBar;