import React from "react";

export default function WeatherIcon(props){
    if (props.code === "01d"){
return (<img className="icons-animated" src="icons/01d.svg" />
);
} else if (props.code === "01n")
{ return(<img className="icons-animated" src="icons/01n.svg" />);

}
}