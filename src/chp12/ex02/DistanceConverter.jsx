import React, {useState} from "react";
import DistanceInput from "./DistanceInput";
import styles from "./DistanceConverter.module.css";

function toKilometers(miles) {
    return (miles * 1.60934).toFixed(3);
}

function toMiles(km){
    return (km / 1.60934).toFixed(3);
}

function tryConvert(distance, convert) {
    const input = parseFloat(distance);
    if(Number.isNaN(input)){
        return '';
    }
    const output = Math.round(convert(input)*1000)/1000;
    return output.toString();
}

function DistanceConverter(){
    const [distance, setDistance] = useState("");
    const [unit, setUnit] = useState("km");

    const handleKilometerChange = (distance) => {
      setDistance(distance);
      setUnit("km");
    };

    const handleMileChange = (distance) => {
        setDistance(distance);
        setUnit("mile");
    };

    const kilometers = unit === "mile" ?
        tryConvert(distance, toKilometers) : distance;

    const miles = unit === "km" ?
        tryConvert(distance,toMiles) : distance;

    //  여기에 추가!

    return(
        <div className={styles.container}>
            <div className={styles.card}>
            <h1 className={styles.title}>거리 단위 변환기</h1>
            <div className={styles.inputWrapper}>
                <DistanceInput
                    unit={"km"}
                    distance={kilometers}
                    onDistanceChange={handleKilometerChange}
                />
            </div>
                <div className={styles.divider}>⇅</div>
                <div className={styles.inputWrapper}>
                <DistanceInput
                    unit={"mile"}
                    distance={miles}
                    onDistanceChange={handleMileChange}
                />
            </div>
                <div className={styles.result}>
                    <p className={styles.resultText}>
                        <span className={styles.resultValue}>{kilometers}km</span>는{" "}
                        <span className={styles.resultValue}>{miles}마일</span>입니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default DistanceConverter;