import React, {useState} from "react";
import './RequestForm.css'

function RequestForm(props) {
    const [value, setValue] = useState('요청 사항을 입력하세요.');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        alert('입력한 요청사항: ' + value);
        event.preventDefault();  // 폼 제출을 막음
    }
    const handleFocus = () => {
        if (value === '요청 사항을 입력하세요.') {
            setValue('');  // 마우스 커서가 올려지면 기본 메시지 제거
        }
    };

    const handleBlur = () => {
        if (value === '') {
            setValue('요청 사항을 입력하세요.');  // 입력이 없으면 기본 메시지로 복원
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청사항: <textarea value={value} onChange={handleChange} onFocus={handleFocus}
                                onBlur={handleBlur}/>
            </label>
            <button type={"submit"}>제출</button>
        </form>
    );
}
export default RequestForm;
