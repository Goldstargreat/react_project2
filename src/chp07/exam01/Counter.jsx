import React, {useState} from "react";
//usestate 훅을 사용하여 상태 설정이 변경될 때마다 다시 렌더링을 할 수 있게 코드를 수정한다.
function  Counter(props){
    const [count, setCount] = useState(0);
    // var count = 0;

    return(
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={()=>setCount(count + 1)}>클릭하십시오.</button>
        </div>
    );
}

export default Counter;