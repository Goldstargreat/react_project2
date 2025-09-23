import React, {useEffect, useState} from "react";
//usestate 훅을 사용하여 상태 설정이 변경될 때마다 다시 렌더링을 할 수 있게 코드를 수정한다.
function  Counter(props){
    const [count, setCount] = useState(0);
    // useEffect 훅은 클래스형 컴포넌트에서 1. 컴포넌트가 마운트되었을 때, 2. 컴포넌트가 업데이트되었을 때(변경) 자동으로
    // 호출되는 콜백 메서드가 함수형 컴포넌트에는 없기 때문에 useEffect 훅을 사용할 수 있다.
    // count useState 설정이 변경될 때마다 제목 표시줄의 문자열을 변경한다.

    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`;
        // 클래스형 컴포넌트에서 3. 컴포넌트가 unmount되었을 때
        return () => {

        }
    });
    return(
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={()=>setCount(count + 1)}>클릭하십시오.</button>
        </div>
    );
}

export default Counter;