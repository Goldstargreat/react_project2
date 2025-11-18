import React from "react";
import WelcomeDialog from "./WelcomeDialog";
import './Containment.css';

function SplitPane(props) {
    return (
      <div className="SplitPane">
          <div className="SplitPane-left">
              {props.left}
          </div>
          <div className= "SplitPane-right">
              {props.right}
          </div>
      </div>
    );
}


function Contacts() {
    return <div>여기는 연락처 목록이 들어갈 자리입니다.</div>;
}

function Chat() {
    return <div>여기는 채팅 창이 들어갈 자리입니다.</div>;
}

function App(props) {
    return (
        // <div>로 두 컴포넌트를 감싸서 나란히 렌더링합니다.
        <div>
            {/* WelcomeDialog 추가 */}
            <WelcomeDialog />
            {/* 기존 SplitPane 유지 */}
            <SplitPane
                left={
                    <Contacts />
                }
                right = {
                    <Chat />
                }
            />
        </div>
    );
}

export default App;