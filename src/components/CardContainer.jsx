import { useContext, useEffect, useState } from "react";
import InputTextContext from "../context/InputTextContext";
import Card from "./Card";
import LoadingWheel from "./LoadingWheel";

const CardContainer = () => {

    const {inputText, setInputText} = useContext(InputTextContext);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const convertSpaces = (string) => {
        return string.replaceAll(" ", "_")
    }

    useEffect(() => {
        let x = convertSpaces(inputText);
        let url = "https://api.punkapi.com/v2/beers";
        if (inputText !== "") {
            url = `https://api.punkapi.com/v2/beers?beer_name=${x}`;
        }

        fetch(url)
        .then(data => data.json())
        .then(response => {
            setData(response);
            setIsLoading(false);
        }).catch(err => {
            console.log(err);
        })

    }, [inputText]);

    // Testing loading screen
    // setInterval(() => {
    //     setData(Data);
    //     setIsLoading(false);
    // }, 5000);
    
    if (isLoading) {
        return (
            <div className="card-container">
                <div></div>
                <div className="load">
                    <LoadingWheel/>
                </div>
                <div></div>
            </div>
        )
    } else {
        return (
            <div className="card-container">
                {data.map((val, idx) => {
                    return (
                        <Card data={val} index={idx}/>
                    )
                })}
            </div>
        )
    }
}

export default CardContainer;