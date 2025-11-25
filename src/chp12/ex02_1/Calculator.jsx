import "./Calculator.css";
import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";
import BoilVerdict from "../ex01/BoilVerdict";

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = Math.round(convert(input) * 1000) / 1000;
    return output.toString();
}
function toCelsius(fahrenheit) {
    return((fahrenheit - 32) * 5) / 9; // 화씨를 섭씨로
}
function toFahrenheit(celsius) {
    return(celsius * 9) / 5 + 32; // 섭씨를 화씨로
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange= (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }
    const handleFahrenheitChange= (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div className="calculator">
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange}/>
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
            <BoilVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}


export default Calculator;