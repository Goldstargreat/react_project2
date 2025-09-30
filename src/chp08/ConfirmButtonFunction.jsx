import React, {useState} from "react";
import button from "../chp04/Button";

function ConfirmButtonFunction(){
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <div>
            ConfirmButton Test Function Type &nbsp;
            <button onClick={handleConfirm} disabled={isConfirmed}>
                {isConfirmed ? "확인됨": "확인하기"}
            </button>
        </div>
    );
}

export default ConfirmButtonFunction;