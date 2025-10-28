import React from "react";

const students = [
    {id:1, name:"김철수", grade:"2", major:"인공지능소프트웨어"},
    {id:2, name:"이영희", grade:"1", major:"지능형에너지설비"},
    {id:3, name:"홍금보", grade:"2", major:"클라우드컴퓨팅"},
    {id:4, name:"이소룡", grade:"2", major:"스마트정보통신"},
    {id:5, name:"견자단", grade:"2", major:"전기"},
];
function StudentAttendance(props) {
    return (
        <div>
            <h2>학생 출석부</h2>
            <ul>
                {
                    students.map((students) => (
                            <li key = {students.id}>
                                <b>{students.name}</b> - {students.grade}학년, {students.major}
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}
export default StudentAttendance;