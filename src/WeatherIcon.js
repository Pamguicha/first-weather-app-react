import React from "react";

export default function WeatherIcon(props){
    const codeMapping = {
        "01d": "icons/01d.svg",
        "01n": "icons/01n.svg"
    };


return (<img className="icons-animated" src={codeMapping[props.code]} />
);
}