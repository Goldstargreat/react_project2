import React, {useState} from "react";
import './Reservation.css';  // CSS 파일 임포트

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuesest] = useState(2);

    const handleSubmit = (event) => {
        alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
        event.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부:
                <input type={"checkbox"} checked={haveBreakfast}
                       onChange={(event) => {
                           setHaveBreakfast(event.target.checked);
                }}/>
            </label>
            <br/>
            <label>
                방문객 수:
                <input type={"number"} value={numberOfGuest}
                       onChange={(event) => {
                           setNumberOfGuesest(event.target.value);
                       }}/>
            </label>
            <button type = "submit">제출</button>
        </form>
    );
}
export default Reservation;